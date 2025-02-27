package service_test

import (
	"context"
	"testing"

	"github.com/HeZephyr/GoMicroKit/pkg/service"
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
	return &BenchResponse{Message: "Hello, " + req.Name}, nil
}

// BenchmarkNewService benchmarks service creation
func BenchmarkNewService(b *testing.B) {
	for i := 0; i < b.N; i++ {
		service.NewService("test-service", "1.0.0")
	}
}

// BenchmarkAddEndpoint benchmarks adding endpoints to a service
func BenchmarkAddEndpoint(b *testing.B) {
	svc := service.NewService("test-service", "1.0.0")
	endpoint := service.NewEndpoint(
		"test-endpoint",
		BenchHandler,
		&BenchRequest{},
		&BenchResponse{},
	)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		svc.AddEndpoint(endpoint)
	}
}

// BenchmarkNewEndpoint benchmarks endpoint creation
func BenchmarkNewEndpoint(b *testing.B) {
	for i := 0; i < b.N; i++ {
		service.NewEndpoint(
			"test-endpoint",
			BenchHandler,
			&BenchRequest{},
			&BenchResponse{},
		)
	}
}

// BenchmarkWithMiddleware benchmarks middleware chain application
func BenchmarkWithMiddleware(b *testing.B) {
	// Create a simple middleware
	middleware := func(next service.Handler) service.Handler {
		return func(ctx context.Context, req any) (any, error) {
			return next(ctx, req)
		}
	}

	// Create a simple handler
	handler := func(ctx context.Context, req any) (any, error) {
		return "response", nil
	}

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		chain := service.Chain(middleware, middleware, middleware)
		chain(handler)
	}
}
