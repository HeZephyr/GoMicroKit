// pkg/transport/http/server.go
package http

import (
    "context"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
    "reflect"
    
    "github.com/HeZephyr/GoMicroKit/pkg/service"
    "github.com/HeZephyr/GoMicroKit/pkg/transport"
)

// Server represents an HTTP server
type Server struct {
    server   *http.Server
    mux      *http.ServeMux
    services map[string]service.Service
    codecs   map[string]transport.Codec
}

// NewServer creates a new HTTP server
func NewServer() *Server {
    s := &Server{
        mux:      http.NewServeMux(),
        services: make(map[string]service.Service),
        codecs:   make(map[string]transport.Codec),
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
        Addr:    addr,
        Handler: s.mux,
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
        
        s.mux.HandleFunc(pattern, func(w http.ResponseWriter, r *http.Request) {
            // Get content type and find appropriate codec
            contentType := r.Header.Get("Content-Type")
            if contentType == "" {
                contentType = "application/json"
            }
            
            codec, ok := s.codecs[contentType]
            if !ok {
                http.Error(w, "Unsupported content type", http.StatusUnsupportedMediaType)
                return
            }
            
            // Create a new instance of the request type
            reqType := endpoint.RequestType()
            req := reflect.New(reqType.Elem()).Interface()
            
            // Decode the request
            if err := codec.Decode(r.Context(), r.Body, req); err != nil {
                http.Error(w, err.Error(), http.StatusBadRequest)
                return
            }
            
            // Call the handler
            handler := endpoint.Handler()
            handlerValue := reflect.ValueOf(handler)
            args := []reflect.Value{reflect.ValueOf(r.Context()), reflect.ValueOf(req)}
            results := handlerValue.Call(args)
            
            // Check for errors
            if !results[1].IsNil() {
                err := results[1].Interface().(error)
                http.Error(w, err.Error(), http.StatusInternalServerError)
                return
            }
            
            // Set content type header
            w.Header().Set("Content-Type", contentType)
            
            // Encode the response
            resp := results[0].Interface()
            if err := codec.Encode(r.Context(), w, resp); err != nil {
                http.Error(w, err.Error(), http.StatusInternalServerError)
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

// JSONCodec is a JSON codec
type JSONCodec struct{}

// ContentType returns the content type
func (c *JSONCodec) ContentType() string {
    return "application/json"
}

// Encode encodes a value to JSON
func (c *JSONCodec) Encode(ctx context.Context, w io.Writer, v interface{}) error {
    return json.NewEncoder(w).Encode(v)
}

// Decode decodes JSON to a value
func (c *JSONCodec) Decode(ctx context.Context, r io.Reader, v interface{}) error {
    return json.NewDecoder(r).Decode(v)
}