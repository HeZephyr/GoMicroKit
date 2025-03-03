// examples/helloworld/grpc/client/main.go
package main

import (
	"context"
	"flag"
	"fmt"
	"io"
	"os"
	"strings"
	"time"

	"github.com/HeZephyr/GoMicroKit/examples/helloworld/grpc/proto"
	"github.com/HeZephyr/GoMicroKit/pkg/log"
	"github.com/HeZephyr/GoMicroKit/pkg/registry/etcd"
	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
	"github.com/HeZephyr/GoMicroKit/pkg/resilience/retry"
	grpctransport "github.com/HeZephyr/GoMicroKit/pkg/transport/grpc"
)

func main() {
	// Parse command-line flags
	nameFlag := flag.String("name", "GoMicroKit User", "Name to send in greeting request")
	failFlag := flag.Bool("fail", false, "Trigger a simulated failure")
	streamFlag := flag.Bool("stream", false, "Use streaming RPC")
	useRegistryFlag := flag.Bool("use-registry", true, "Try to use service registry for discovery")
	serverAddrFlag := flag.String("server", "localhost:50051", "Server address (host:port) if not using registry")
	etcdEndpointsFlag := flag.String("etcd", "localhost:2379", "etcd endpoints (comma separated)")
	serviceName := flag.String("service", "helloworld", "Service name to look up in registry")
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
		// Parse etcd endpoints
		etcdEndpoints := strings.Split(*etcdEndpointsFlag, ",")

		// Create etcd registry client
		reg, err := etcd.NewRegistry(etcdEndpoints)
		if err != nil {
			logger.Error("Failed to create etcd registry: %v", err)
			os.Exit(1)
		}
		defer reg.Close()

		logger.Info("Using etcd registry for service discovery with endpoints: %s", *etcdEndpointsFlag)

		// Query for the service
		services, err := reg.GetService(ctx, *serviceName)
		if err != nil {
			logger.Error("Failed to query registry: %v", err)
			logger.Info("Falling back to direct address: %s", serviceAddr)
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

			// Optional: Set up a watcher to track service changes
			go watchService(reg, *serviceName, logger)
		} else {
			logger.Info("No service instances found in registry, falling back to direct address: %s", serviceAddr)
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
	logger.Info("Connecting to service at %s", serviceAddr)
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

// watchService sets up a watcher for service changes
func watchService(reg *etcd.Registry, serviceName string, logger log.Logger) {
	ctx := context.Background()
	watcher, err := reg.Watch(ctx, serviceName)
	if err != nil {
		logger.Error("Failed to create service watcher: %v", err)
		return
	}
	defer watcher.Stop()

	logger.Info("Watching for changes to service: %s", serviceName)

	for {
		services, err := watcher.Next()
		if err != nil {
			logger.Error("Watcher error: %v", err)
			return
		}

		logger.Info("Service update detected. Available instances: %d", len(services))
		for i, svc := range services {
			logger.Info("  [%d] %s:%d (ID: %s)", i, svc.Address, svc.Port, svc.ID)
		}
	}
}
