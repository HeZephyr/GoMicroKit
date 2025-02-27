package tests

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/HeZephyr/GoMicroKit/pkg/registry"
	"github.com/HeZephyr/GoMicroKit/pkg/registry/memory"
	"github.com/HeZephyr/GoMicroKit/pkg/service"
	microhttp "github.com/HeZephyr/GoMicroKit/pkg/transport/http"
)

// BenchRequest is a benchmark request type
type BenchRequest struct {
	Name string `json:"name"`
}

// BenchResponse is a benchmark response type
type BenchResponse struct {
	Message string `json:"message"`
}

// BenchHandler is a benchmark handler function
func BenchHandler(ctx context.Context, req *BenchRequest) (*BenchResponse, error) {
	return &BenchResponse{Message: fmt.Sprintf("Hello, %s!", req.Name)}, nil
}

// BenchmarkFullRequestFlow benchmarks the entire request flow from client to response
func BenchmarkFullRequestFlow(b *testing.B) {
	// Create a service
	svc := service.NewService("bench-service", "1.0.0")

	// Create an endpoint
	endpoint := service.NewEndpoint(
		"greeting",
		BenchHandler,
		&BenchRequest{},
		&BenchResponse{},
	)

	// Add the endpoint to the service
	svc.AddEndpoint(endpoint)

	// Create a registry
	reg := memory.NewRegistry()

	// Create a transport
	server := microhttp.NewServer()

	// Register the service with the transport
	if err := server.Register(svc); err != nil {
		b.Fatalf("Failed to register service: %v", err)
	}

	// Register the service with the registry
	serviceInfo := registry.FromService(svc, "localhost", 8080)
	if err := reg.Register(context.Background(), serviceInfo); err != nil {
		b.Fatalf("Failed to register service with registry: %v", err)
	}

	// Create a test server
	ts := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		server.ServeHTTP(w, r)
	}))
	defer ts.Close()

	// Prepare request data
	reqBody, _ := json.Marshal(&BenchRequest{Name: "Benchmark"})

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		req, _ := http.NewRequest("POST", ts.URL+"/bench-service/greeting", bytes.NewBuffer(reqBody))
		req.Header.Set("Content-Type", "application/json")

		resp, err := http.DefaultClient.Do(req)
		if err != nil {
			b.Fatal(err)
		}

		var response BenchResponse
		if err := json.NewDecoder(resp.Body).Decode(&response); err != nil {
			b.Fatal(err)
		}
		resp.Body.Close()
	}
}

// BenchmarkServiceDiscovery benchmarks the service discovery process
func BenchmarkServiceDiscovery(b *testing.B) {
	// Create a registry
	reg := memory.NewRegistry()
	ctx := context.Background()

	// Register some services first
	for i := 0; i < 10; i++ {
		svc := &registry.ServiceInfo{
			ID:        fmt.Sprintf("bench-service-%d", i),
			Name:      "bench-service",
			Version:   "1.0.0",
			Address:   fmt.Sprintf("localhost-%d", i),
			Port:      8080 + i,
			Metadata:  map[string]string{"instance": fmt.Sprintf("%d", i)},
			Endpoints: []string{"endpoint1", "endpoint2"},
		}
		if err := reg.Register(ctx, svc); err != nil {
			b.Fatalf("Failed to register service %d: %v", i, err)
		}
	}

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		services, err := reg.GetService(ctx, "bench-service")
		if err != nil {
			b.Fatalf("Failed to get service: %v", err)
		}

		if len(services) == 0 {
			b.Fatal("No services found")
		}

		// Simulate selecting a service instance (simple round-robin)
		instanceIndex := i % len(services)
		_ = services[instanceIndex]
	}
}
