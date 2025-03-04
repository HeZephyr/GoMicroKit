package main

import (
	"context"
	"flag"
	"fmt"
	"os"
	"os/signal"
	"strings"
	"syscall"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/log"
	"github.com/HeZephyr/GoMicroKit/pkg/registry"
	"github.com/HeZephyr/GoMicroKit/pkg/registry/etcd"
	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
	"github.com/HeZephyr/GoMicroKit/pkg/resilience/circuitbreaker"
	"github.com/HeZephyr/GoMicroKit/pkg/resilience/ratelimit"
	"github.com/HeZephyr/GoMicroKit/pkg/resilience/retry"
	"github.com/HeZephyr/GoMicroKit/pkg/service"
	"github.com/HeZephyr/GoMicroKit/pkg/tracing"
	"github.com/HeZephyr/GoMicroKit/pkg/transport/http"
	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/trace"
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
	// Add custom attributes to the current span
	span := trace.SpanFromContext(ctx)
	span.SetAttributes(attribute.String("request.name", req.Name))

	// Add an event to the span
	span.AddEvent("Processing hello request")

	// Simulate potential failure for demonstration purposes
	if req.Name == "fail" {
		span.AddEvent("Request failed - simulated failure")
		return nil, fmt.Errorf("simulated failure")
	}

	name := req.Name
	if name == "" {
		name = "World"
	}

	// Add another event
	span.AddEvent("Request processed successfully")

	return &HelloResponse{
		Message: fmt.Sprintf("Hello, %s!", name),
		Time:    time.Now(),
	}, nil
}

// Simple function to test if tracing is working
func testTracing(provider *tracing.Provider, logger log.Logger) {
	logger.Info("Running tracing test...")

	ctx := context.Background()

	// Create a tracer
	tracer := provider.Tracer("test")

	// Create a root span
	ctx, rootSpan := tracer.Start(ctx, "TestRootSpan")

	// Add some attributes
	rootSpan.SetAttributes(
		attribute.String("test.attribute", "test-value"),
		attribute.Int("test.number", 42),
	)

	// Create a child span
	_, childSpan := tracer.Start(ctx, "TestChildSpan")

	// Simulate some work in the child span context
	time.Sleep(100 * time.Millisecond)

	// Add an event
	childSpan.AddEvent("test.event", trace.WithAttributes(
		attribute.String("event.detail", "something happened"),
	))

	// End the child span
	childSpan.End()

	// Simulate more work
	time.Sleep(50 * time.Millisecond)

	// End the root span
	rootSpan.End()

	logger.Info("Test trace sent to Jaeger with service name: %s", provider.ServiceName())
	logger.Info("Check Jaeger UI at http://localhost:16686")
}

func main() {
	// Parse command-line flags
	port := flag.Int("port", 8080, "The server port")
	host := flag.String("host", "localhost", "The server host")
	etcdEndpointsFlag := flag.String("etcd", "localhost:2379", "etcd endpoints (comma separated)")
	ttl := flag.Duration("ttl", 30*time.Second, "Service registration TTL")
	flag.Parse()

	// Create a logger
	logger := log.NewLogger()
	logger.Info("Starting HelloWorld HTTP service with resilience patterns, tracing, and etcd registry")

	// Create a service
	svc := service.NewService("helloworld", "1.0.0")
	svc.AddMetadata("description", "A resilient hello world service with tracing")
	svc.AddMetadata("transport", "http")

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

	// 4. Tracing
	provider, err := tracing.NewProvider(
		tracing.WithServiceName("helloworld-http"),
		tracing.WithOTLPHTTPExporter("localhost:4318"),
		tracing.WithSamplingRate(1.0),
	)
	if err != nil {
		logger.Fatal("Failed to create tracing provider: %v", err)
	}
	defer provider.Shutdown(context.Background())

	// Run a test to verify tracing is working
	testTracing(provider, logger)

	// Create middleware chain - put tracing first so it captures everything
	middleware := service.Chain(
		tracing.TracingMiddleware(provider),         // First apply tracing (outermost)
		log.LoggingMiddleware(logger),               // Then log the request
		retry.RetryMiddleware(retrier),              // Then apply retry
		circuitbreaker.CircuitBreakerMiddleware(cb), // Then circuit breaker
		ratelimit.RateLimitMiddleware(rl),           // Finally rate limiting (innermost)
	)

	// Create an endpoint with middleware
	endpoint := service.NewEndpoint(
		"hello",
		service.ApplyMiddleware(HelloHandler, middleware),
		&HelloRequest{},
		&HelloResponse{},
	)
	endpoint.AddMetadata("description", "Says hello to the caller with resilience patterns and tracing")

	// Add the endpoint to the service
	svc.AddEndpoint(endpoint)

	// Parse etcd endpoints and create etcd registry
	etcdEndpoints := strings.Split(*etcdEndpointsFlag, ",")
	reg, err := etcd.NewRegistry(
		etcdEndpoints,
		etcd.WithTTL(*ttl),
		etcd.WithCheckInterval(*ttl/3),
	)
	if err != nil {
		logger.Fatal("Failed to create etcd registry: %v", err)
	}
	defer reg.Close()

	// Create a transport with tracing enabled
	transport := http.NewServer(
		http.WithServerTracing(provider), // Add transport-level tracing
	)

	// Register the service with the transport
	if err := transport.Register(svc); err != nil {
		logger.Fatal("Failed to register service: %v", err)
	}

	// Start the transport in a goroutine
	addr := fmt.Sprintf(":%d", *port)
	go func() {
		logger.Info("Starting HTTP server on %s", addr)
		if err := transport.Serve(addr); err != nil {
			logger.Fatal("Server error: %v", err)
		}
	}()

	// Register the service with the registry
	serviceInfo := registry.FromService(svc, *host, *port)
	if err := reg.Register(context.Background(), serviceInfo); err != nil {
		logger.Fatal("Failed to register service with etcd registry: %v", err)
	}

	logger.Info("Service registered with etcd registry")
	logger.Info("Service ID: %s", serviceInfo.ID)
	logger.Info("Service Name: %s", serviceInfo.Name)
	logger.Info("Service Version: %s", serviceInfo.Version)
	logger.Info("Service Address: %s:%d", serviceInfo.Address, serviceInfo.Port)

	// Print usage information
	logger.Info("Service running. Try these commands:")
	logger.Info("  curl -X POST -H \"Content-Type: application/json\" -d '{\"name\":\"YourName\"}' http://%s:%d/helloworld/hello", *host, *port)
	logger.Info("  curl -X POST -H \"Content-Type: application/json\" -d '{\"name\":\"fail\"}' http://%s:%d/helloworld/hello", *host, *port)

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

	// Ensure all traces are exported before shutdown
	logger.Info("Flushing traces...")
	if err := provider.Shutdown(ctx); err != nil {
		logger.Error("Error shutting down tracing provider: %v", err)
	}

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
