// examples/helloworld/grpc/client/main.go
package main

import (
	"context"
	"flag"
	"fmt"
	"io"
	"os"
	"time"

	"github.com/HeZephyr/GoMicroKit/examples/helloworld/grpc/proto"
	"github.com/HeZephyr/GoMicroKit/pkg/log"
	"github.com/HeZephyr/GoMicroKit/pkg/registry/memory"
	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
	"github.com/HeZephyr/GoMicroKit/pkg/resilience/retry"
	grpctransport "github.com/HeZephyr/GoMicroKit/pkg/transport/grpc"
)

func main() {
	// Parse command-line flags
	nameFlag := flag.String("name", "GoMicroKit User", "Name to send in greeting request")
	failFlag := flag.Bool("fail", false, "Trigger a simulated failure")
	streamFlag := flag.Bool("stream", false, "Use streaming RPC")
	useRegistryFlag := flag.Bool("use-registry", false, "Try to use service registry for discovery")
	serverAddrFlag := flag.String("server", "localhost:50051", "Server address (host:port)")
	flag.Parse()

	// Create logger
	logger := log.NewLogger()
	logger.Info("Starting HelloWorld gRPC client")

	// Create context with timeout
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	// Initialize service address
	serviceAddr := *serverAddrFlag

	// Try using registry for service discovery if requested
	if *useRegistryFlag {
		// Create registry client
		reg := memory.NewRegistry()
		logger.Info("Trying memory registry for service discovery")

		// Query for the service
		services, err := reg.GetService(ctx, "helloworld")
		if err != nil {
			logger.Info("Failed to query registry: %v", err) // Changed from Warning to Info
		} else if len(services) > 0 {
			// Use the first available instance
			svc := services[0]
			serviceAddr = fmt.Sprintf("%s:%d", svc.Address, svc.Port)
			logger.Info("Discovered service at %s", serviceAddr)

			// Print service metadata
			logger.Info("Service metadata:")
			for k, v := range svc.Metadata {
				logger.Info("  %s: %s", k, v)
			}
		} else {
			logger.Info("No service instances found in registry, falling back to direct address: %s", serviceAddr) // Changed from Warning to Info
		}
	} else {
		// Use direct address
		logger.Info("Using direct service address: %s", serviceAddr)
	}

	// Create retry mechanism
	retrier := retry.NewRetry("client-retry", resilience.RetryOptions{
		Attempts:      3,
		Delay:         200 * time.Millisecond,
		MaxDelay:      2 * time.Second,
		BackoffFactor: 1.5,
		RetryableFunc: func(err error) bool {
			// Only retry certain types of errors
			return err != nil
		},
	})

	// Create gRPC client
	client, err := grpctransport.NewClient("hello-client", serviceAddr)
	if err != nil {
		logger.Fatal("Could not create client: %v", err)
	}
	defer client.Close()

	// Get connection and create service client
	conn := client.Conn()
	helloClient := proto.NewHelloWorldClient(conn)

	// Prepare request
	name := *nameFlag
	if *failFlag {
		name = "fail"
	}

	// Create the request
	req := &proto.HelloRequest{Name: name}

	if *streamFlag {
		// Handle streaming RPC
		logger.Info("Calling SayHelloStream RPC...")
		stream, err := helloClient.SayHelloStream(ctx, req)
		if err != nil {
			logger.Fatal("Error calling SayHelloStream: %v", err)
		}

		// Receive and print responses
		for {
			resp, err := stream.Recv()
			if err == io.EOF {
				break
			}
			if err != nil {
				logger.Error("Error receiving stream: %v", err)
				break
			}
			logger.Info("Stream response: %s (at %s)", resp.Message, resp.Time)
		}
	} else {
		// Handle unary RPC with retry
		logger.Info("Calling SayHello RPC...")

		result, err := retrier.Execute(ctx, func(ctx context.Context) (any, error) {
			return helloClient.SayHello(ctx, req)
		})

		if err != nil {
			logger.Error("Error calling SayHello after retries: %v", err)
			os.Exit(1)
		}

		resp := result.(*proto.HelloResponse)
		logger.Info("Response: %s (at %s)", resp.Message, resp.Time)
	}
}
