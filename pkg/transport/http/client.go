package http

import (
	"bytes"
	"context"
	"fmt"
	"io"
	"net/http"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/tracing"
	"github.com/HeZephyr/GoMicroKit/pkg/transport"

	"go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp"
	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/codes"
	"go.opentelemetry.io/otel/propagation"
	"go.opentelemetry.io/otel/trace"
)

// Client represents an HTTP client that implements transport.Client
type Client struct {
	name       string
	baseURL    string
	httpClient *http.Client
	codecs     map[string]transport.Codec
	provider   *tracing.Provider
}

// Verify at compile time that Client implements transport.Client
var _ transport.Client = (*Client)(nil)

// ClientOption is a function that configures a client
type ClientOption func(*Client)

// WithTimeout sets the client timeout
func WithTimeout(timeout time.Duration) ClientOption {
	return func(c *Client) {
		c.httpClient.Timeout = timeout
	}
}

// WithCodec adds a codec to the client
func WithCodec(codec transport.Codec) ClientOption {
	return func(c *Client) {
		c.codecs[codec.ContentType()] = codec
	}
}

// WithHTTPClient sets a custom HTTP client
func WithHTTPClient(httpClient *http.Client) ClientOption {
	return func(c *Client) {
		c.httpClient = httpClient
	}
}

// WithClientTracing enables tracing for the client
func WithClientTracing(provider *tracing.Provider) ClientOption {
	return func(c *Client) {
		c.provider = provider

		// If provider is enabled, wrap the transport with tracing
		if provider != nil && provider.IsEnabled() {
			transport := c.httpClient.Transport
			if transport == nil {
				transport = http.DefaultTransport
			}

			// Use otelhttp to wrap the transport
			c.httpClient.Transport = otelhttp.NewTransport(
				transport,
				otelhttp.WithTracerProvider(provider.TracerProvider()),
				otelhttp.WithSpanNameFormatter(func(operation string, r *http.Request) string {
					return fmt.Sprintf("%s %s", r.Method, r.URL.Path)
				}),
			)
		}
	}
}

// NewClient creates a new HTTP client
func NewClient(name, baseURL string, options ...ClientOption) *Client {
	// Default HTTP client with reasonable timeouts
	defaultClient := &http.Client{
		Timeout: 30 * time.Second,
		Transport: &http.Transport{
			MaxIdleConns:        100,
			MaxConnsPerHost:     100,
			MaxIdleConnsPerHost: 100,
			IdleConnTimeout:     90 * time.Second,
		},
	}

	c := &Client{
		name:       name,
		baseURL:    baseURL,
		httpClient: defaultClient,
		codecs:     make(map[string]transport.Codec),
	}

	// Register default JSON codec
	c.codecs["application/json"] = &JSONCodec{}

	// Apply options
	for _, option := range options {
		option(c)
	}

	return c
}

// Name returns the client name
func (c *Client) Name() string {
	return c.name
}

// Call invokes a remote endpoint
func (c *Client) Call(ctx context.Context, serviceName, endpointName string, req, resp any) error {
	// Determine which codec to use (default to JSON)
	contentType := "application/json"
	codec, ok := c.codecs[contentType]
	if !ok {
		return fmt.Errorf("no codec found for content type: %s", contentType)
	}

	// Build the URL
	url := fmt.Sprintf("%s/%s/%s", c.baseURL, serviceName, endpointName)

	// Create a span for the call if tracing is enabled
	if c.provider != nil && c.provider.IsEnabled() {
		tracer := c.provider.Tracer("http.client")
		var span trace.Span
		ctx, span = tracer.Start(ctx,
			fmt.Sprintf("HTTP Call %s/%s", serviceName, endpointName),
			trace.WithSpanKind(trace.SpanKindClient),
			trace.WithAttributes(
				attribute.String("http.method", "POST"),
				attribute.String("http.url", url),
				attribute.String("http.service", serviceName),
				attribute.String("http.endpoint", endpointName),
			),
		)
		defer span.End()
	}

	// Encode the request body
	var reqBody bytes.Buffer
	if err := codec.Encode(ctx, &reqBody, req); err != nil {
		err = fmt.Errorf("failed to encode request: %w", err)
		if c.provider != nil && c.provider.IsEnabled() {
			span := trace.SpanFromContext(ctx)
			span.RecordError(err)
			span.SetStatus(codes.Error, err.Error())
		}
		return err
	}

	// Create the HTTP request
	httpReq, err := http.NewRequestWithContext(ctx, "POST", url, &reqBody)
	if err != nil {
		err = fmt.Errorf("failed to create request: %w", err)
		if c.provider != nil && c.provider.IsEnabled() {
			span := trace.SpanFromContext(ctx)
			span.RecordError(err)
			span.SetStatus(codes.Error, err.Error())
		}
		return err
	}

	// Set headers
	httpReq.Header.Set("Content-Type", contentType)
	httpReq.Header.Set("Accept", contentType)

	// Inject trace context into headers if tracing is enabled
	if c.provider != nil && c.provider.IsEnabled() {
		otel.GetTextMapPropagator().Inject(ctx, propagation.HeaderCarrier(httpReq.Header))
	}

	// Send the request
	httpResp, err := c.httpClient.Do(httpReq)
	if err != nil {
		err = fmt.Errorf("request failed: %w", err)
		if c.provider != nil && c.provider.IsEnabled() {
			span := trace.SpanFromContext(ctx)
			span.RecordError(err)
			span.SetStatus(codes.Error, err.Error())
		}
		return err
	}
	defer httpResp.Body.Close()

	// Record response status in span if tracing is enabled
	if c.provider != nil && c.provider.IsEnabled() {
		span := trace.SpanFromContext(ctx)
		span.SetAttributes(attribute.Int("http.status_code", httpResp.StatusCode))
		if httpResp.StatusCode >= 400 {
			span.SetStatus(codes.Error, fmt.Sprintf("HTTP %d", httpResp.StatusCode))
		}
	}

	// Check the response status
	if httpResp.StatusCode != http.StatusOK {
		// Try to read the error body
		errorBody, _ := io.ReadAll(httpResp.Body)
		err = fmt.Errorf("server returned non-OK status: %d %s, body: %s",
			httpResp.StatusCode, httpResp.Status, string(errorBody))
		if c.provider != nil && c.provider.IsEnabled() {
			span := trace.SpanFromContext(ctx)
			span.RecordError(err)
		}
		return err
	}

	// Decode the response
	if err := codec.Decode(ctx, httpResp.Body, resp); err != nil {
		err = fmt.Errorf("failed to decode response: %w", err)
		if c.provider != nil && c.provider.IsEnabled() {
			span := trace.SpanFromContext(ctx)
			span.RecordError(err)
			span.SetStatus(codes.Error, err.Error())
		}
		return err
	}

	return nil
}

// Close closes the client
func (c *Client) Close() error {
	// HTTP client doesn't have a specific close method
	// But we can implement cleanup logic here if needed
	return nil
}

// Do performs an HTTP request directly, for more control
func (c *Client) Do(req *http.Request) (*http.Response, error) {
	// If tracing is enabled, inject trace context
	if c.provider != nil && c.provider.IsEnabled() {
		ctx := req.Context()
		tracer := c.provider.Tracer("http.client")

		// Create a span for this request
		ctx, span := tracer.Start(ctx,
			fmt.Sprintf("HTTP %s %s", req.Method, req.URL.Path),
			trace.WithSpanKind(trace.SpanKindClient),
			trace.WithAttributes(
				attribute.String("http.method", req.Method),
				attribute.String("http.url", req.URL.String()),
			),
		)

		// Inject trace context into headers
		otel.GetTextMapPropagator().Inject(ctx, propagation.HeaderCarrier(req.Header))

		// Update request with traced context
		req = req.WithContext(ctx)

		// Send request and record result
		resp, err := c.httpClient.Do(req)

		// Record response or error in span
		if err != nil {
			span.RecordError(err)
			span.SetStatus(codes.Error, err.Error())
		} else if resp != nil {
			span.SetAttributes(attribute.Int("http.status_code", resp.StatusCode))
			if resp.StatusCode >= 400 {
				span.SetStatus(codes.Error, fmt.Sprintf("HTTP %d", resp.StatusCode))
			}
		}

		// End span
		span.End()

		return resp, err
	}

	// If tracing is not enabled, just do the request normally
	return c.httpClient.Do(req)
}

// BaseURL returns the base URL of the client
func (c *Client) BaseURL() string {
	return c.baseURL
}
