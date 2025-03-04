// examples/helloworld/grpc/server/main.go
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

	"github.com/HeZephyr/GoMicroKit/examples/helloworld/grpc/proto"
	"github.com/HeZephyr/GoMicroKit/pkg/log"
	"github.com/HeZephyr/GoMicroKit/pkg/registry"
	"github.com/HeZephyr/GoMicroKit/pkg/registry/etcd"
	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
	"github.com/HeZephyr/GoMicroKit/pkg/resilience/circuitbreaker"
	"github.com/HeZephyr/GoMicroKit/pkg/resilience/ratelimit"
	"github.com/HeZephyr/GoMicroKit/pkg/resilience/retry"
	"github.com/HeZephyr/GoMicroKit/pkg/service"
	"github.com/HeZephyr/GoMicroKit/pkg/tracing"
	grpctransport "github.com/HeZephyr/GoMicroKit/pkg/transport/grpc"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// HelloWorldService combines our Service interface with gRPC registrar
// It wraps the base service and the actual gRPC server implementation
type HelloWorldService struct {
	*service.BaseService
	implementation *helloWorldServer
}

// RegisterWithGRPC implements the GRPCServiceRegistrar interface
// This method is called by the transport layer to register our service with the gRPC server
func (s *HelloWorldService) RegisterWithGRPC(server *grpc.Server) {
	proto.RegisterHelloWorldServer(server, s.implementation)
}

// helloWorldServer is our gRPC server implementation that handles actual RPC calls
type helloWorldServer struct {
	proto.UnimplementedHelloWorldServer
	logger log.Logger
}

// SayHello implements the SayHello RPC method
// This is a unary RPC method that takes a request and returns a response
func (s *helloWorldServer) SayHello(ctx context.Context, req *proto.HelloRequest) (*proto.HelloResponse, error) {
	// Log incoming request
	s.logger.Info("Handling SayHello request from: %s", req.Name)

	// Check for simulated failure - useful for testing resilience patterns
	if req.Name == "fail" {
		s.logger.Info("Simulating failure")
		return nil, status.Error(codes.Internal, "simulated failure")
	}

	// Use default name if none provided
	name := req.Name
	if name == "" {
		name = "World"
	}

	// Create and return the response
	return &proto.HelloResponse{
		Message: fmt.Sprintf("Hello, %s!", name),
		Time:    time.Now().Format(time.RFC3339),
	}, nil
}

// SayHelloStream implements the streaming RPC method
// This is a server streaming RPC where the server sends multiple responses
func (s *helloWorldServer) SayHelloStream(req *proto.HelloRequest, stream proto.HelloWorld_SayHelloStreamServer) error {
	// Log incoming stream request
	s.logger.Info("Handling SayHelloStream request from: %s", req.Name)

	// Check for simulated failure
	if req.Name == "fail" {
		s.logger.Info("Simulating failure")
		return status.Error(codes.Internal, "simulated failure")
	}

	// Use default name if none provided
	name := req.Name
	if name == "" {
		name = "World"
	}

	// Send 5 responses with a delay between each
	for i := 1; i <= 5; i++ {
		message := fmt.Sprintf("Hello, %s! (message %d of 5)", name, i)

		if err := stream.Send(&proto.HelloResponse{
			Message: message,
			Time:    time.Now().Format(time.RFC3339),
		}); err != nil {
			return err
		}

		// Add a delay between messages to simulate streaming
		time.Sleep(1 * time.Second)
	}

	return nil
}

func main() {
	// Parse command-line flags
	port := flag.Int("port", 50051, "The server port")
	host := flag.String("host", "localhost", "The server host")
	etcdEndpointsFlag := flag.String("etcd", "localhost:2379", "etcd endpoints (comma separated)")
	ttl := flag.Duration("ttl", 30*time.Second, "Service registration TTL")
	jaegerEndpoint := flag.String("jaeger", "localhost:4318", "Jaeger endpoint (OTLP HTTP, default: localhost:4318)")
	tracingEnabled := flag.Bool("tracing", true, "Enable tracing")
	flag.Parse()

	// Create a logger
	logger := log.NewLogger()
	logger.Info("Starting HelloWorld gRPC service with resilience patterns and tracing")

	// Initialize the tracing provider
	// This enables distributed tracing across our microservices
	tracingProvider, err := tracing.NewProvider(
		tracing.WithServiceName("helloworld-grpc"),
		tracing.WithOTLPHTTPExporter(*jaegerEndpoint),
		tracing.WithEnabled(*tracingEnabled),
		tracing.WithSamplingRate(1.0), // Sample all traces in dev/test
	)
	if err != nil {
		logger.Fatal("Failed to create tracing provider: %v", err)
	}
	// Ensure traces are flushed on shutdown
	defer tracingProvider.Shutdown(context.Background())

	// Create resilience components
	// 1. Circuit Breaker - prevents cascading failures by failing fast when a service is unhealthy
	cb := circuitbreaker.NewCircuitBreaker("hello-cb", resilience.CircuitBreakerOptions{
		Threshold:   5,                // Open after 5 failures
		Timeout:     30 * time.Second, // Stay open for 30 seconds
		HalfOpenMax: 2,                // Allow 2 requests when half-open
		OnStateChange: func(from, to string) {
			logger.Info("Circuit breaker state changed from %s to %s", from, to)
		},
	})

	// 2. Rate Limiter - prevents service overload by limiting the number of requests
	rl := ratelimit.NewTokenBucketRateLimiter("hello-rl", resilience.RateLimiterOptions{
		Rate:  10, // 10 requests per second
		Burst: 5,  // Allow burst of 5 requests
	})

	// 3. Retry Mechanism - automatically retries failed requests with backoff
	retrier := retry.NewRetry("hello-retry", resilience.RetryOptions{
		Attempts:      3,                      // Try up to 3 times
		Delay:         100 * time.Millisecond, // Start with 100ms delay
		MaxDelay:      1 * time.Second,        // Cap delay at 1 second
		BackoffFactor: 2.0,                    // Double delay after each attempt
		RetryableFunc: func(err error) bool {
			// Only retry specific errors
			if err == nil {
				return false
			}

			// Don't retry if it's a simulated failure
			if status, ok := status.FromError(err); ok {
				return status.Code() != codes.Internal
			}

			return true
		},
	})

	// Create the gRPC implementation
	impl := &helloWorldServer{
		logger: logger,
	}

	// Create the service wrapper
	svc := &HelloWorldService{
		BaseService:    service.NewService("helloworld", "1.0.0"),
		implementation: impl,
	}

	// Add service metadata - useful for service discovery and documentation
	svc.AddMetadata("description", "A resilient gRPC hello world service with tracing")
	svc.AddMetadata("transport", "grpc")

	// Parse etcd endpoints and create etcd registry for service registration
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

	// Create gRPC server with interceptors
	// The order of interceptors is important: outer interceptors are executed first
	transport := grpctransport.NewGRPCServer(
		grpctransport.WithServerOptions(
			grpc.ChainUnaryInterceptor(
				tracing.TracingInterceptor(tracingProvider),  // First apply tracing (outermost)
				log.LoggingInterceptor(logger),               // Then logging
				retry.RetryInterceptor(retrier),              // Then retry logic
				circuitbreaker.CircuitBreakerInterceptor(cb), // Then circuit breaker
				ratelimit.RateLimitInterceptor(rl),           // Finally rate limiting (innermost)
			),
			grpc.ChainStreamInterceptor(
				tracing.TracingStreamInterceptor(tracingProvider), // Same pattern for streaming RPCs
				log.LoggingStreamInterceptor(logger),
				retry.RetryStreamInterceptor(retrier),
				circuitbreaker.CircuitBreakerStreamInterceptor(cb),
				ratelimit.RateLimitStreamInterceptor(rl),
			),
		),
	)

	// Register the service with the transport
	if err := transport.Register(svc); err != nil {
		logger.Fatal("Failed to register service: %v", err)
	}

	// Start the transport in a goroutine to avoid blocking
	go func() {
		addr := fmt.Sprintf(":%d", *port)
		logger.Info("Starting gRPC server on %s", addr)
		if err := transport.Serve(addr); err != nil {
			logger.Fatal("Server error: %v", err)
		}
	}()

	// Register the service with the service registry (etcd)
	// This allows other services to discover and connect to this service
	serviceInfo := registry.FromService(svc, *host, *port)
	if err := reg.Register(context.Background(), serviceInfo); err != nil {
		logger.Fatal("Failed to register service with etcd registry: %v", err)
	}

	// Log service registration details
	logger.Info("Service registered with etcd registry")
	logger.Info("Service ID: %s", serviceInfo.ID)
	logger.Info("Service Name: %s", serviceInfo.Name)
	logger.Info("Service Version: %s", serviceInfo.Version)
	logger.Info("Service Address: %s:%d", serviceInfo.Address, serviceInfo.Port)

	// Print usage information
	logger.Info("Service running. Use the client to test it.")
	logger.Info("Try calling with normal name or 'fail' to trigger circuit breaker")
	logger.Info("Tracing enabled: %v, endpoint: %s", *tracingEnabled, *jaegerEndpoint)

	// Start a goroutine to periodically log circuit breaker stats
	go func() {
		ticker := time.NewTicker(10 * time.Second)
		defer ticker.Stop()

		for range ticker.C {
			logger.Info("Circuit breaker state: %s", cb.State())
		}
	}()

	// Wait for interrupt signal to gracefully shut down the server
	c := make(chan os.Signal, 1)
	signal.Notify(c, syscall.SIGINT, syscall.SIGTERM)
	<-c

	// Graceful shutdown
	logger.Info("Shutting down...")
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	// Ensure all traces are exported before shutdown
	logger.Info("Flushing traces...")
	if err := tracingProvider.Shutdown(ctx); err != nil {
		logger.Error("Failed to shut down tracing provider: %v", err)
	}

	// Deregister the service from the registry
	if err := reg.Deregister(context.Background(), serviceInfo); err != nil {
		logger.Error("Failed to deregister service: %v", err)
	}

	// Stop the transport
	if err := transport.Stop(ctx); err != nil {
		logger.Error("Failed to stop server: %v", err)
	}

	logger.Info("Service stopped")
}
