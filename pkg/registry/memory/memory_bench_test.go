package memory_test

import (
	"context"
	"fmt"
	"testing"

	"github.com/HeZephyr/GoMicroKit/pkg/registry"
	"github.com/HeZephyr/GoMicroKit/pkg/registry/memory"
)

// BenchmarkRegistryRegister benchmarks registering a service
func BenchmarkRegistryRegister(b *testing.B) {
	reg := memory.NewRegistry()
	ctx := context.Background()

	svc := &registry.ServiceInfo{
		ID:        "bench-service-1",
		Name:      "bench-service",
		Version:   "1.0.0",
		Address:   "localhost",
		Port:      8080,
		Metadata:  map[string]string{"key": "value"},
		Endpoints: []string{"endpoint1", "endpoint2"},
	}

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		// Create a unique ID for each iteration to avoid conflicts
		svc.ID = fmt.Sprintf("bench-service-%d", i)
		if err := reg.Register(ctx, svc); err != nil {
			b.Fatalf("Failed to register service: %v", err)
		}
	}
}

// BenchmarkRegistryGetService benchmarks retrieving services
func BenchmarkRegistryGetService(b *testing.B) {
	reg := memory.NewRegistry()
	ctx := context.Background()

	// Register some services first
	for i := 0; i < 10; i++ {
		svc := &registry.ServiceInfo{
			ID:        fmt.Sprintf("bench-service-%d", i),
			Name:      "bench-service",
			Version:   "1.0.0",
			Address:   "localhost",
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
		_, err := reg.GetService(ctx, "bench-service")
		if err != nil {
			b.Fatalf("Failed to get service: %v", err)
		}
	}
}

// BenchmarkRegistryDeregister benchmarks deregistering services
func BenchmarkRegistryDeregister(b *testing.B) {
	reg := memory.NewRegistry()
	ctx := context.Background()

	// Prepare services to deregister
	services := make([]*registry.ServiceInfo, b.N)
	for i := 0; i < b.N; i++ {
		svc := &registry.ServiceInfo{
			ID:      fmt.Sprintf("bench-service-%d", i),
			Name:    "bench-service",
			Version: "1.0.0",
			Address: "localhost",
			Port:    8080 + i,
		}
		services[i] = svc
		if err := reg.Register(ctx, svc); err != nil {
			b.Fatalf("Failed to register service %d: %v", i, err)
		}
	}

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		if err := reg.Deregister(ctx, services[i]); err != nil {
			b.Fatalf("Failed to deregister service %d: %v", i, err)
		}
	}
}

// BenchmarkRegistryWatch benchmarks watching for service changes
func BenchmarkRegistryWatch(b *testing.B) {
	// This is more of a functionality test than a benchmark,
	// as watching is inherently asynchronous
	b.Skip("Skipping watch benchmark as it's not suitable for benchmarking")
}
