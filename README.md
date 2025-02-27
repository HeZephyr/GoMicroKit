# GoMicroKit

A lightweight, high-performance microservice framework for Go that strikes the perfect balance between simplicity and flexibility.

## Features

- **Simple Service Definition** - Intuitive API for defining services and endpoints
- **HTTP Transport** - Built-in HTTP server and client
- **Service Registry** - Basic service discovery and registration
- **Middleware Support** - Extensible request processing pipeline
- **Structured Logging** - Comprehensive logging capabilities

## Installation

```bash
go get github.com/HeZephyr/GoMicroKit
```

## Quick Start
Create a simple microservice in minutes:
```go
package main

import (
    "context"
    
    "github.com/HeZephyr/GoMicroKit/pkg/service"
    "github.com/HeZephyr/GoMicroKit/pkg/transport/http"
)

// Define request and response
type HelloRequest struct {
    Name string `json:"name"`
}

type HelloResponse struct {
    Message string `json:"message"`
}

// Implement service handler
func HelloHandler(ctx context.Context, req *HelloRequest) (*HelloResponse, error) {
    name := req.Name
    if name == "" {
        name = "World"
    }
    
    return &HelloResponse{
        Message: "Hello, " + name + "!",
    }, nil
}

func main() {
    // Create a new service
    svc := service.NewService("greeter", "1.0.0")
    
    // Add an endpoint
    endpoint := service.NewEndpoint(
        "hello",
        HelloHandler,
        &HelloRequest{},
        &HelloResponse{},
    )
    svc.AddEndpoint(endpoint)
    
    // Create HTTP server and register service
    server := http.NewServer()
    server.Register(svc)
    
    // Start the server
    server.Serve(":8080")
}
```
## Core Components
* Service Layer - Define your service interface and business logic
* Transport Layer - Handle HTTP communication
* Registry - Simple service discovery and registration
* Logging - Structured logging capabilities
## Examples
Explore the Hello World example to get started.
## Roadmap
### v0.1.0 (Current)
* Core service definition API
* HTTP transport implementation
* Basic middleware support
* In-memory service registry
### Future Releases
* gRPC transport implementation
* Circuit breaker and rate limiter
* External registry integration (Consul, etcd)
* Distributed tracing
* Metrics collection
* Configuration management
## License

GoMicroKit is available under the MIT license. See the [LICENSE](https://github.com/HeZephyr/GoMicroKit/blob/main/LICENSE) file for more info.