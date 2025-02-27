// pkg/transport/http/server_test.go
package http_test

import (
	"bytes"
	"context"
	"encoding/json"
	"io"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/HeZephyr/GoMicroKit/pkg/service"
	microhttp "github.com/HeZephyr/GoMicroKit/pkg/transport/http"
)

// TestRequest is a test request type
type TestRequest struct {
	Name string `json:"name"`
}

// TestResponse is a test response type
type TestResponse struct {
	Message string `json:"message"`
}

// SampleHandler is a test handler function (renamed from TestHandler)
func SampleHandler(ctx context.Context, req *TestRequest) (*TestResponse, error) {
	return &TestResponse{Message: "Hello, " + req.Name}, nil
}

func TestServerName(t *testing.T) {
	server := microhttp.NewServer()
	if server.Name() != "http" {
		t.Errorf("Expected server name 'http', got '%s'", server.Name())
	}
}

func TestServerRegisterAndServe(t *testing.T) {
	// Create a test service
	svc := service.NewService("test-service", "1.0.0")
	endpoint := service.NewEndpoint(
		"test-endpoint",
		SampleHandler,
		&TestRequest{},
		&TestResponse{},
	)
	svc.AddEndpoint(endpoint)

	// Create a server
	server := microhttp.NewServer()
	if err := server.Register(svc); err != nil {
		t.Fatalf("Failed to register service: %v", err)
	}

	// Create a test HTTP server
	ts := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Forward the request to our server's mux
		server.ServeHTTP(w, r)
	}))
	defer ts.Close()

	// Create a request
	reqBody := bytes.NewBufferString(`{"name":"Test"}`)
	resp, err := http.Post(ts.URL+"/test-service/test-endpoint", "application/json", reqBody)
	if err != nil {
		t.Fatalf("Failed to send request: %v", err)
	}
	defer resp.Body.Close()

	// Check response
	if resp.StatusCode != http.StatusOK {
		t.Errorf("Expected status code %d, got %d", http.StatusOK, resp.StatusCode)
	}

	// Parse response body
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		t.Fatalf("Failed to read response body: %v", err)
	}

	var response TestResponse
	if err := json.Unmarshal(body, &response); err != nil {
		t.Fatalf("Failed to unmarshal response: %v", err)
	}

	if response.Message != "Hello, Test" {
		t.Errorf("Expected message 'Hello, Test', got '%s'", response.Message)
	}
}

func TestJSONCodec(t *testing.T) {
	codec := &microhttp.JSONCodec{}

	if codec.ContentType() != "application/json" {
		t.Errorf("Expected content type 'application/json', got '%s'", codec.ContentType())
	}

	// Test encoding
	resp := TestResponse{Message: "Hello"}
	var buf bytes.Buffer
	err := codec.Encode(context.Background(), &buf, resp)
	if err != nil {
		t.Fatalf("Failed to encode: %v", err)
	}

	// Test decoding
	var decoded TestResponse
	err = codec.Decode(context.Background(), bytes.NewBuffer(buf.Bytes()), &decoded)
	if err != nil {
		t.Fatalf("Failed to decode: %v", err)
	}

	if decoded.Message != "Hello" {
		t.Errorf("Expected message 'Hello', got '%s'", decoded.Message)
	}
}
