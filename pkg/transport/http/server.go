package http

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"reflect"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/service"
	"github.com/HeZephyr/GoMicroKit/pkg/tracing"
	"github.com/HeZephyr/GoMicroKit/pkg/transport"

	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/codes"
	"go.opentelemetry.io/otel/propagation"
	"go.opentelemetry.io/otel/trace"
)

// ServerOption is a function that configures the server
type ServerOption func(*Server)

// WithServerTracing enables tracing for the server
func WithServerTracing(provider *tracing.Provider) ServerOption {
	return func(s *Server) {
		s.provider = provider
	}
}

// Server represents an HTTP server
type Server struct {
	server   *http.Server
	mux      *http.ServeMux
	services map[string]service.Service
	codecs   map[string]transport.Codec
	provider *tracing.Provider
}

// statusRecorder is a wrapper for http.ResponseWriter that records the status code
type statusRecorder struct {
	http.ResponseWriter
	Status int
}

// WriteHeader captures the status code before writing it
func (r *statusRecorder) WriteHeader(status int) {
	r.Status = status
	r.ResponseWriter.WriteHeader(status)
}

// NewServer creates a new HTTP server
func NewServer(opts ...ServerOption) *Server {
	s := &Server{
		mux:      http.NewServeMux(),
		services: make(map[string]service.Service),
		codecs:   make(map[string]transport.Codec),
	}

	// Apply options
	for _, opt := range opts {
		opt(s)
	}

	// Register default JSON codec
	s.RegisterCodec(&JSONCodec{})

	return s
}

// Name returns the transport name
func (s *Server) Name() string {
	return "http"
}

// Serve starts the HTTP server
func (s *Server) Serve(addr string) error {
	s.server = &http.Server{
		Addr:              addr,
		Handler:           s.mux,
		ReadHeaderTimeout: 20 * time.Second, // Prevents Slowloris attacks
		ReadTimeout:       1 * time.Minute,  // Maximum duration for reading the entire request
		WriteTimeout:      2 * time.Minute,  // Maximum duration for writing the response
		IdleTimeout:       3 * time.Minute,  // Maximum time to wait for the next request on keep-alive connections
	}
	return s.server.ListenAndServe()
}

// Stop stops the HTTP server
func (s *Server) Stop(ctx context.Context) error {
	return s.server.Shutdown(ctx)
}

// Register registers a service with the server
func (s *Server) Register(svc service.Service) error {
	s.services[svc.Name()] = svc

	for _, endpoint := range svc.Endpoints() {
		pattern := fmt.Sprintf("/%s/%s", svc.Name(), endpoint.Name())

		// Store pattern and endpoint for tracing
		endpointPath := pattern
		endpointName := endpoint.Name()

		s.mux.HandleFunc(pattern, func(w http.ResponseWriter, r *http.Request) {
			// Create a context for this request
			ctx := r.Context()

			// Add tracing if provider is available
			if s.provider != nil && s.provider.IsEnabled() {
				// Get tracer
				tracer := s.provider.Tracer("http.server")

				// Start a span for this request
				spanName := fmt.Sprintf("%s %s", r.Method, endpointPath)
				var span trace.Span
				ctx, span = tracer.Start(ctx, spanName,
					trace.WithSpanKind(trace.SpanKindServer),
					trace.WithAttributes(
						attribute.String("http.method", r.Method),
						attribute.String("http.path", endpointPath),
						attribute.String("http.service", svc.Name()),
						attribute.String("http.endpoint", endpointName),
					),
				)
				defer span.End()

				// Extract trace headers from request
				propagator := otel.GetTextMapPropagator()
				ctx = propagator.Extract(ctx, propagation.HeaderCarrier(r.Header))

				// Create a wrapper to track response status
				ww := &statusRecorder{ResponseWriter: w, Status: http.StatusOK}
				w = ww

				// Defer adding response attributes
				defer func() {
					span.SetAttributes(attribute.Int("http.status_code", ww.Status))
					if ww.Status >= 400 {
						span.SetStatus(codes.Error, fmt.Sprintf("HTTP %d", ww.Status))
					}
				}()
			}

			// Get content type and find appropriate codec
			contentType := r.Header.Get("Content-Type")
			if contentType == "" {
				contentType = "application/json"
			}

			codec, ok := s.codecs[contentType]
			if !ok {
				status := http.StatusUnsupportedMediaType
				http.Error(w, "Unsupported content type", status)
				return
			}

			// Create a new instance of the request type
			reqType := endpoint.RequestType()
			req := reflect.New(reqType.Elem()).Interface()

			// Decode the request
			if err := codec.Decode(ctx, r.Body, req); err != nil {
				status := http.StatusBadRequest
				http.Error(w, err.Error(), status)
				return
			}

			// Call the handler
			handler := endpoint.Handler()
			handlerValue := reflect.ValueOf(handler)
			args := []reflect.Value{reflect.ValueOf(ctx), reflect.ValueOf(req)}
			results := handlerValue.Call(args)

			// Check for errors
			if !results[1].IsNil() {
				err := results[1].Interface().(error)
				status := http.StatusInternalServerError
				http.Error(w, err.Error(), status)
				return
			}

			// Set content type header
			w.Header().Set("Content-Type", contentType)

			// Encode the response
			resp := results[0].Interface()
			if err := codec.Encode(ctx, w, resp); err != nil {
				status := http.StatusInternalServerError
				http.Error(w, err.Error(), status)
				return
			}
		})
	}

	return nil
}

// RegisterCodec registers a codec for a content type
func (s *Server) RegisterCodec(codec transport.Codec) {
	s.codecs[codec.ContentType()] = codec
}

// ServeHTTP implements the http.Handler interface (for testing)
func (s *Server) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	s.mux.ServeHTTP(w, r)
}

// JSONCodec is a JSON codec
type JSONCodec struct{}

// ContentType returns the content type
func (c *JSONCodec) ContentType() string {
	return "application/json"
}

// Encode encodes a value to JSON
func (c *JSONCodec) Encode(ctx context.Context, w io.Writer, v any) error {
	return json.NewEncoder(w).Encode(v)
}

// Decode decodes JSON to a value
func (c *JSONCodec) Decode(ctx context.Context, r io.Reader, v any) error {
	return json.NewDecoder(r).Decode(v)
}
