// pkg/transport/http/client.go
package http

import (
	"bytes"
	"context"
	"fmt"
	"io"
	"net/http"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/transport"
)

// Client represents an HTTP client that implements transport.Client
type Client struct {
	name       string
	baseURL    string
	httpClient *http.Client
	codecs     map[string]transport.Codec
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

	// Encode the request body
	var reqBody bytes.Buffer
	if err := codec.Encode(ctx, &reqBody, req); err != nil {
		return fmt.Errorf("failed to encode request: %w", err)
	}

	// Create the HTTP request
	httpReq, err := http.NewRequestWithContext(ctx, "POST", url, &reqBody)
	if err != nil {
		return fmt.Errorf("failed to create request: %w", err)
	}

	// Set headers
	httpReq.Header.Set("Content-Type", contentType)
	httpReq.Header.Set("Accept", contentType)

	// Send the request
	httpResp, err := c.httpClient.Do(httpReq)
	if err != nil {
		return fmt.Errorf("request failed: %w", err)
	}
	defer httpResp.Body.Close()

	// Check the response status
	if httpResp.StatusCode != http.StatusOK {
		// Try to read the error body
		errorBody, _ := io.ReadAll(httpResp.Body)
		return fmt.Errorf("server returned non-OK status: %d %s, body: %s", 
			httpResp.StatusCode, httpResp.Status, string(errorBody))
	}

	// Decode the response
	if err := codec.Decode(ctx, httpResp.Body, resp); err != nil {
		return fmt.Errorf("failed to decode response: %w", err)
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
	return c.httpClient.Do(req)
}