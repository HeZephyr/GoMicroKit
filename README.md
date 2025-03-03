# GoMicroKit

A lightweight, high-performance microservice framework for Go that strikes the perfect balance between simplicity and flexibility.

## Features

- **Simple Service Definition** - Intuitive API for defining services and endpoints
- **Multiple Transports** - Built-in HTTP and gRPC servers and clients
- **Service Registry** - Service discovery and registration with etcd
- **Middleware Support** - Extensible request processing pipeline
- **Structured Logging** - Comprehensive logging capabilities
- **Resilience Patterns** - Circuit breaker, rate limiting, and retry mechanisms
- **Distributed Tracing** - OpenTelemetry integration for request flow visibility

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
- **Service Layer** - Define your service interface and business logic
- **Transport Layer** - Handle HTTP and gRPC communication
- **Registry** - Service discovery and registration with etcd
- **Resilience** - Circuit breaker, rate limiter, and retry capabilities
- **Tracing** - Distributed tracing with OpenTelemetry
- **Logging** - Structured logging capabilities
## Prerequisites
For distributed features, you'll need to run:
- Jaeger (for distributed tracing)
    ```bash
    docker run -d --name jaeger \
    -e COLLECTOR_ZIPKIN_HOST_PORT=:9411 \
    -e COLLECTOR_OTLP_ENABLED=true \
    -p 6831:6831/udp \
    -p 6832:6832/udp \
    -p 5778:5778 \
    -p 16686:16686 \
    -p 4317:4317 \
    -p 4318:4318 \
    -p 14250:14250 \
    -p 14268:14268 \
    -p 14269:14269 \
    -p 9411:9411 \
    jaegertracing/all-in-one:latest
    ```
    Access the Jaeger UI at http://localhost:16686

- etcd (for service discovery)
    ```bash
    docker run -d --name etcd \
    -p 2379:2379 \
    -p 2380:2380 \
    -e ETCD_ADVERTISE_CLIENT_URLS="http://localhost:2379" \
    -e ETCD_LISTEN_CLIENT_URLS="http://0.0.0.0:2379" \
    -e ETCD_LISTEN_PEER_URLS="http://0.0.0.0:2380" \
    -e ETCD_INITIAL_ADVERTISE_PEER_URLS="http://localhost:2380" \
    -e ETCD_INITIAL_CLUSTER="default=http://localhost:2380" \
    -e ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster" \
    -e ETCD_INITIAL_CLUSTER_STATE="new" \
    quay.io/coreos/etcd:v3.5.0
    ```
## Examples
Explore the [Hello World example](examples/helloworld/http/server/main.go) to get started.
## Roadmap
### v1.0.0 (Current)
- Core service definition API
- HTTP and gRPC transport implementation
- Comprehensive middleware support
- etcd service registry integration
- Circuit breaker, rate limiter, and retry mechanisms
- Distributed tracing with OpenTelemetry
### Future Releases
- Additional registry integrations (Consul, Zookeeper)
- Enhanced metrics collection
- Configuration management
- Service mesh integration
- Kubernetes-native deployment options
- GraphQL support

## License

GoMicroKit is available under the MIT license. See the [LICENSE](https://github.com/HeZephyr/GoMicroKit/blob/main/LICENSE) file for more info.