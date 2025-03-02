// examples/helloworld/http/server.go
package main

import (
	"context"
	"fmt"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/log"
	"github.com/HeZephyr/GoMicroKit/pkg/registry"
	"github.com/HeZephyr/GoMicroKit/pkg/registry/memory"
	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
	"github.com/HeZephyr/GoMicroKit/pkg/resilience/circuitbreaker"
	"github.com/HeZephyr/GoMicroKit/pkg/resilience/ratelimit"
	"github.com/HeZephyr/GoMicroKit/pkg/resilience/retry"
	"github.com/HeZephyr/GoMicroKit/pkg/service"
	"github.com/HeZephyr/GoMicroKit/pkg/transport/http"
)

// Request and response types
type HelloRequest struct {
	Name string `json:"name"`
}

type HelloResponse struct {
	Message string    `json:"message"`
	Time    time.Time `json:"time"`
}

// Handler function
func HelloHandler(ctx context.Context, req *HelloRequest) (*HelloResponse, error) {
	// Simulate potential failure for demonstration purposes
	if req.Name == "fail" {
		return nil, fmt.Errorf("simulated failure")
	}

	name := req.Name
	if name == "" {
		name = "World"
	}

	return &HelloResponse{
		Message: fmt.Sprintf("Hello, %s!", name),
		Time:    time.Now(),
	}, nil
}

// LoggingMiddleware logs information about requests
func LoggingMiddleware(logger log.Logger) service.Middleware {
	return func(next service.Handler) service.Handler {
		return func(ctx context.Context, req any) (any, error) {
			startTime := time.Now()
			logger.Info("Received request: %T", req)

			resp, err := next(ctx, req)

			duration := time.Since(startTime)
			if err != nil {
				logger.Error("Request failed after %v: %v", duration, err)
			} else {
				logger.Info("Request succeeded in %v", duration)
			}

			return resp, err
		}
	}
}

func main() {
	// Create a logger
	logger := log.NewLogger()
	logger.Info("Starting HelloWorld service with resilience patterns")

	// Create a service
	svc := service.NewService("helloworld", "1.0.0")
	svc.AddMetadata("description", "A resilient hello world service")

	// Create resilience components
	// 1. Circuit Breaker
	cb := circuitbreaker.NewCircuitBreaker("hello-cb", resilience.CircuitBreakerOptions{
		Threshold:   5,                // Open after 5 failures
		Timeout:     30 * time.Second, // Stay open for 30 seconds
		HalfOpenMax: 2,                // Allow 2 requests when half-open
		OnStateChange: func(from, to string) {
			logger.Info("Circuit breaker state changed from %s to %s", from, to)
		},
	})

	// 2. Rate Limiter
	rl := ratelimit.NewTokenBucketRateLimiter("hello-rl", resilience.RateLimiterOptions{
		Rate:  50, // 50 requests per second
		Burst: 10, // Allow burst of 10 requests
	})

	// 3. Retry Mechanism
	retrier := retry.NewRetry("hello-retry", resilience.RetryOptions{
		Attempts:      3,                      // Try up to 3 times
		Delay:         100 * time.Millisecond, // Start with 100ms delay
		MaxDelay:      1 * time.Second,        // Cap delay at 1 second
		BackoffFactor: 2.0,                    // Double delay after each attempt
		RetryableFunc: func(err error) bool {
			// Only retry if the error message contains certain keywords
			if err == nil {
				return false
			}
			errMsg := err.Error()
			return errMsg == "simulated failure" ||
				errMsg == "temporary error" ||
				errMsg == "connection reset"
		},
	})

	// Create middleware chain
	middleware := service.Chain(
		LoggingMiddleware(logger),                   // First log the request
		retry.Middleware(retrier),                   // Then apply retry (outermost resilience layer)
		circuitbreaker.CircuitBreakerMiddleware(cb), // Then circuit breaker
		ratelimit.RateLimiterMiddleware(rl),         // Finally rate limiting (innermost resilience layer)
	)

	// Create an endpoint with middleware
	endpoint := service.NewEndpoint(
		"hello",
		service.ApplyMiddleware(HelloHandler, middleware),
		&HelloRequest{},
		&HelloResponse{},
	)
	endpoint.AddMetadata("description", "Says hello to the caller with resilience patterns")

	// Add the endpoint to the service
	svc.AddEndpoint(endpoint)

	// Create a registry
	reg := memory.NewRegistry()

	// Create a transport
	transport := http.NewServer()

	// Register the service with the transport
	if err := transport.Register(svc); err != nil {
		logger.Fatal("Failed to register service: %v", err)
	}

	// Register the service with the registry
	serviceInfo := registry.FromService(svc, "localhost", 8080)
	if err := reg.Register(context.Background(), serviceInfo); err != nil {
		logger.Fatal("Failed to register service with registry: %v", err)
	}

	// Start the transport in a goroutine
	go func() {
		logger.Info("Starting HTTP server on :8080")
		if err := transport.Serve(":8080"); err != nil {
			logger.Fatal("Server error: %v", err)
		}
	}()

	// Print usage information
	logger.Info("Service running. Try these commands:")
	logger.Info("  curl -X POST -H \"Content-Type: application/json\" -d '{\"name\":\"YourName\"}' http://localhost:8080/helloworld/hello")
	logger.Info("  curl -X POST -H \"Content-Type: application/json\" -d '{\"name\":\"fail\"}' http://localhost:8080/helloworld/hello")

	// Start a goroutine to periodically log stats
	go func() {
		ticker := time.NewTicker(10 * time.Second)
		defer ticker.Stop()

		for range ticker.C {
			logger.Info("Circuit breaker state: %s", cb.State())
		}
	}()

	// Wait for interrupt signal
	c := make(chan os.Signal, 1)
	signal.Notify(c, syscall.SIGINT, syscall.SIGTERM)
	<-c

	// Graceful shutdown
	logger.Info("Shutting down...")
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	// Deregister the service
	if err := reg.Deregister(context.Background(), serviceInfo); err != nil {
		logger.Error("Failed to deregister service: %v", err)
	}

	// Stop the transport
	if err := transport.Stop(ctx); err != nil {
		logger.Error("Failed to stop server: %v", err)
	}

	logger.Info("Service stopped")
}
