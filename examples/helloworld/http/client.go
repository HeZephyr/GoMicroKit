// examples/helloworld/client.go
package main

import (
	"context"
	"encoding/json"
	"flag"
	"fmt"
	"os"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/log"
	"github.com/HeZephyr/GoMicroKit/pkg/registry/memory"
	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
	"github.com/HeZephyr/GoMicroKit/pkg/resilience/circuitbreaker"
	"github.com/HeZephyr/GoMicroKit/pkg/resilience/retry"
	"github.com/HeZephyr/GoMicroKit/pkg/transport/http"
)

// Request and response types (same as server)
type HelloRequest struct {
	Name string `json:"name"`
}

type HelloResponse struct {
	Message string    `json:"message"`
	Time    time.Time `json:"time"`
}

func main() {
	// Parse command-line arguments
	nameFlag := flag.String("name", "GoMicroKit User", "Name to send in greeting request")
	failFlag := flag.Bool("fail", false, "Trigger a simulated failure")
	serverFlag := flag.String("server", "http://localhost:8080", "Server address")
	retriesFlag := flag.Int("retries", 3, "Number of retries for failed requests")
	timeoutFlag := flag.Duration("timeout", 5*time.Second, "Request timeout")
	useRegistryFlag := flag.Bool("use-registry", false, "Use service registry for discovery")
	flag.Parse()

	// Create a logger
	logger := log.NewLogger()
	logger.Info("Starting HelloWorld HTTP client")

	// Create a context with timeout
	ctx, cancel := context.WithTimeout(context.Background(), *timeoutFlag)
	defer cancel()

	// Initialize server address
	serverAddr := *serverFlag

	// Try to use registry for service discovery if requested
	if *useRegistryFlag {
		reg := memory.NewRegistry()
		logger.Info("Trying memory registry for service discovery")

		services, err := reg.GetService(ctx, "helloworld")
		if err != nil {
			logger.Info("Failed to query registry: %v", err)
		} else if len(services) > 0 {
			// Use the first available instance
			svc := services[0]
			serverAddr = fmt.Sprintf("http://%s:%d", svc.Address, svc.Port)
			logger.Info("Discovered service at %s", serverAddr)
		} else {
			logger.Info("No service instances found in registry, falling back to direct address: %s", serverAddr)
		}
	}

	// Create resilience components
	// 1. Circuit Breaker
	cb := circuitbreaker.NewCircuitBreaker("client-cb", resilience.CircuitBreakerOptions{
		Threshold:   3,                // Open after 3 failures
		Timeout:     10 * time.Second, // Stay open for 10 seconds
		HalfOpenMax: 1,                // Allow 1 request when half-open
		OnStateChange: func(from, to string) {
			logger.Info("Circuit breaker state changed from %s to %s", from, to)
		},
	})

	// 2. Retry Mechanism
	retrier := retry.NewRetry("client-retry", resilience.RetryOptions{
		Attempts:      *retriesFlag,
		Delay:         200 * time.Millisecond,
		MaxDelay:      2 * time.Second,
		BackoffFactor: 1.5,
	})

	// Create HTTP client
	client := http.NewClient(
		"hello-client",
		serverAddr,
		http.WithTimeout(*timeoutFlag),
	)

	// Prepare the request
	name := *nameFlag
	if *failFlag {
		name = "fail"
	}
	req := &HelloRequest{Name: name}
	resp := &HelloResponse{}

	// Use circuit breaker
	if !cb.Allow() {
		logger.Error("Circuit breaker is open, not sending request")
		os.Exit(1)
	}

	// Execute request with retry
	startTime := time.Now()
	logger.Info("Sending request to %s/helloworld/hello", serverAddr)

	// Removed the unused variable finalErr
	result, err := retrier.Execute(ctx, func(ctx context.Context) (any, error) {
		err := client.Call(ctx, "helloworld", "hello", req, resp)
		if err != nil {
			logger.Error("Request failed: %v, retrying...", err)
			return nil, err
		}
		return resp, nil
	})

	// Handle the result
	if err != nil {
		cb.Failure()
		logger.Error("All retries failed: %v", err)
		os.Exit(1)
	}

	// Process successful response
	cb.Success()
	duration := time.Since(startTime)
	respData := result.(*HelloResponse)
	
	logger.Info("Request completed successfully in %v", duration)
	logger.Info("Response: %s", respData.Message)
	logger.Info("Server time: %s", respData.Time.Format(time.RFC3339))

	// Pretty print the response in JSON
	prettyResp, _ := json.MarshalIndent(respData, "", "  ")
	fmt.Println("\nResponse JSON:")
	fmt.Println(string(prettyResp))
}