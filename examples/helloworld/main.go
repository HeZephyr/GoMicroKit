// examples/helloworld/main.go
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
    name := req.Name
    if name == "" {
        name = "World"
    }
    
    return &HelloResponse{
        Message: fmt.Sprintf("Hello, %s!", name),
        Time:    time.Now(),
    }, nil
}

func main() {
    // Create a logger
    logger := log.NewLogger()
    logger.Info("Starting HelloWorld service")
    
    // Create a service
    svc := service.NewService("helloworld", "1.0.0")
    svc.AddMetadata("description", "A simple hello world service")
    
    // Create an endpoint
    endpoint := service.NewEndpoint(
        "hello",
        HelloHandler,
        &HelloRequest{},
        &HelloResponse{},
    )
    endpoint.AddMetadata("description", "Says hello to the caller")
    
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