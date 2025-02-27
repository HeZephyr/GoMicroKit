// tests/integration_test.go
package tests

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"testing"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/registry"
	"github.com/HeZephyr/GoMicroKit/pkg/registry/memory"
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

// SampleHandler is a handler function used in tests
func SampleHandler(ctx context.Context, req *TestRequest) (*TestResponse, error) {
	return &TestResponse{Message: fmt.Sprintf("Hello, %s!", req.Name)}, nil
}

func TestIntegration(t *testing.T) {
	// Create a service
	svc := service.NewService("test-service", "1.0.0")
	svc.AddMetadata("description", "A test service")

	// Create an endpoint
	endpoint := service.NewEndpoint(
		"greeting",
		SampleHandler,
		&TestRequest{},
		&TestResponse{},
	)
	endpoint.AddMetadata("description", "Returns a greeting")

	// Add the endpoint to the service
	svc.AddEndpoint(endpoint)

	// Create a registry
	reg := memory.NewRegistry()

	// Create a transport
	server := microhttp.NewServer()

	// Register the service with the transport
	if err := server.Register(svc); err != nil {
		t.Fatalf("Failed to register service: %v", err)
	}

	// Register the service with the registry
	serviceInfo := registry.FromService(svc, "localhost", 8081)
	if err := reg.Register(context.Background(), serviceInfo); err != nil {
		t.Fatalf("Failed to register service with registry: %v", err)
	}

	// Start the server in a goroutine
	go func() {
		if err := server.Serve(":8081"); err != http.ErrServerClosed {
			t.Logf("Server error: %v", err)
		}
	}()

	// Wait for the server to start
	time.Sleep(100 * time.Millisecond)

	// Make a request to the server
	reqBody := bytes.NewBufferString(`{"name":"Integration Test"}`)
	resp, err := http.Post("http://localhost:8081/test-service/greeting", "application/json", reqBody)
	if err != nil {
		t.Fatalf("Failed to send request: %v", err)
	}
	defer resp.Body.Close()

	// Check response
	if resp.StatusCode != http.StatusOK {
		t.Fatalf("Expected status code %d, got %d", http.StatusOK, resp.StatusCode)
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

	if response.Message != "Hello, Integration Test!" {
		t.Errorf("Expected message 'Hello, Integration Test!', got '%s'", response.Message)
	}

	// Look up the service in the registry
	services, err := reg.GetService(context.Background(), "test-service")
	if err != nil {
		t.Fatalf("Failed to get service from registry: %v", err)
	}

	if len(services) != 1 {
		t.Fatalf("Expected 1 service, got %d", len(services))
	}

	if services[0].Name != "test-service" {
		t.Errorf("Expected service name 'test-service', got '%s'", services[0].Name)
	}

	// Shutdown the server
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	if err := server.Stop(ctx); err != nil {
		t.Fatalf("Failed to stop server: %v", err)
	}
}
