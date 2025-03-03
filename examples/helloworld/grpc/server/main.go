// examples/helloworld/grpc/server/main.go
package main

import (
	"context"
	"fmt"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/HeZephyr/GoMicroKit/examples/helloworld/grpc/proto"
	"github.com/HeZephyr/GoMicroKit/pkg/log"
	"github.com/HeZephyr/GoMicroKit/pkg/registry"
	"github.com/HeZephyr/GoMicroKit/pkg/registry/memory"
	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
	"github.com/HeZephyr/GoMicroKit/pkg/resilience/circuitbreaker"
	"github.com/HeZephyr/GoMicroKit/pkg/resilience/ratelimit"
	"github.com/HeZephyr/GoMicroKit/pkg/resilience/retry"
	"github.com/HeZephyr/GoMicroKit/pkg/service"
	grpctransport "github.com/HeZephyr/GoMicroKit/pkg/transport/grpc"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// HelloWorldService combines our Service interface with gRPC registrar
type HelloWorldService struct {
	*service.BaseService
	implementation *helloWorldServer
}

// RegisterWithGRPC implements the GRPCServiceRegistrar interface
func (s *HelloWorldService) RegisterWithGRPC(server *grpc.Server) {
	proto.RegisterHelloWorldServer(server, s.implementation)
}

// helloWorldServer is our gRPC server implementation
type helloWorldServer struct {
	proto.UnimplementedHelloWorldServer
	logger  log.Logger
	cb      *circuitbreaker.CircuitBreaker
	rl      *ratelimit.TokenBucketRateLimiter
	retrier *retry.Retry
}

// SayHello implements the SayHello RPC
func (s *helloWorldServer) SayHello(ctx context.Context, req *proto.HelloRequest) (*proto.HelloResponse, error) {
	// Apply rate limiting
	if !s.rl.Allow() {
		s.logger.Error("Rate limit exceeded")
		return nil, status.Error(codes.ResourceExhausted, "too many requests")
	}

	// Apply circuit breaker
	if !s.cb.Allow() {
		s.logger.Error("Circuit breaker open")
		return nil, status.Error(codes.Unavailable, "service temporarily unavailable")
	}

	// Check for simulated failure
	if req.Name == "fail" {
		s.logger.Info("Simulating failure")
		s.cb.Failure()
		return nil, status.Error(codes.Internal, "simulated failure")
	}

	// Log the request
	s.logger.Info("Received request from: %s", req.Name)

	// Record success
	s.cb.Success()

	// Create response
	name := req.Name
	if name == "" {
		name = "World"
	}

	return &proto.HelloResponse{
		Message: fmt.Sprintf("Hello, %s!", name),
		Time:    time.Now().Format(time.RFC3339),
	}, nil
}

// SayHelloStream implements the streaming RPC
func (s *helloWorldServer) SayHelloStream(req *proto.HelloRequest, stream proto.HelloWorld_SayHelloStreamServer) error {
	// Apply rate limiting
	if !s.rl.Allow() {
		s.logger.Error("Rate limit exceeded")
		return status.Error(codes.ResourceExhausted, "too many requests")
	}

	// Apply circuit breaker
	if !s.cb.Allow() {
		s.logger.Error("Circuit breaker open")
		return status.Error(codes.Unavailable, "service temporarily unavailable")
	}

	// Check for simulated failure
	if req.Name == "fail" {
		s.logger.Info("Simulating failure")
		s.cb.Failure()
		return status.Error(codes.Internal, "simulated failure")
	}

	name := req.Name
	if name == "" {
		name = "World"
	}

	// Send 5 responses with a delay
	for i := 1; i <= 5; i++ {
		message := fmt.Sprintf("Hello, %s! (message %d of 5)", name, i)

		if err := stream.Send(&proto.HelloResponse{
			Message: message,
			Time:    time.Now().Format(time.RFC3339),
		}); err != nil {
			s.cb.Failure()
			return err
		}

		time.Sleep(1 * time.Second)
	}

	s.cb.Success()
	return nil
}

func main() {
	// Create a logger
	logger := log.NewLogger()
	logger.Info("Starting HelloWorld gRPC service with resilience patterns")

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
		Rate:  10, // 10 requests per second
		Burst: 5,  // Allow burst of 5 requests
	})

	// 3. Retry Mechanism
	retrier := retry.NewRetry("hello-retry", resilience.RetryOptions{
		Attempts:      3,                      // Try up to 3 times
		Delay:         100 * time.Millisecond, // Start with 100ms delay
		MaxDelay:      1 * time.Second,        // Cap delay at 1 second
		BackoffFactor: 2.0,                    // Double delay after each attempt
	})

	// Create the gRPC implementation
	impl := &helloWorldServer{
		logger:  logger,
		cb:      cb,
		rl:      rl,
		retrier: retrier,
	}

	// Create the service
	svc := &HelloWorldService{
		BaseService:    service.NewService("helloworld", "1.0.0"),
		implementation: impl,
	}

	// Add service metadata
	svc.AddMetadata("description", "A resilient gRPC hello world service")
	svc.AddMetadata("transport", "grpc")

	// Create a registry
	reg := memory.NewRegistry()

	// Create a gRPC transport server
	transport := grpctransport.NewServer()

	// Register the service with the transport
	if err := transport.Register(svc); err != nil {
		logger.Fatal("Failed to register service: %v", err)
	}

	// Start the transport in a goroutine
	go func() {
		logger.Info("Starting gRPC server on :50051")
		if err := transport.Serve(":50051"); err != nil {
			logger.Fatal("Server error: %v", err)
		}
	}()

	// Register the service with the registry
	serviceInfo := registry.FromService(svc, "localhost", 50051)
	if err := reg.Register(context.Background(), serviceInfo); err != nil {
		logger.Fatal("Failed to register service with registry: %v", err)
	}

	logger.Info("Service registered with memory registry")
	logger.Info("Service ID: %s", serviceInfo.ID)
	logger.Info("Service Name: %s", serviceInfo.Name)
	logger.Info("Service Version: %s", serviceInfo.Version)

	// Print usage information
	logger.Info("Service running. Use the client to test it.")
	logger.Info("Try calling with normal name or 'fail' to trigger circuit breaker")

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
