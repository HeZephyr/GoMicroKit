// pkg/service/service.go
package service

import (
    "context"
    "reflect"
)

// Service represents a microservice
type Service interface {
    // Name returns the service name
    Name() string
    
    // Version returns the service version
    Version() string
    
    // Metadata returns the service metadata
    Metadata() map[string]string
    
    // Endpoints returns all endpoints this service provides
    Endpoints() []Endpoint
}

// Endpoint represents a single RPC endpoint
type Endpoint interface {
    // Name returns the endpoint name
    Name() string
    
    // Handler returns the endpoint handler function
    Handler() interface{}
    
    // RequestType returns the type of request object
    RequestType() reflect.Type
    
    // ResponseType returns the type of response object
    ResponseType() reflect.Type
    
    // Metadata returns the endpoint metadata
    Metadata() map[string]string
}

// HandlerFunc is the standard function signature for service handlers
type HandlerFunc[Req, Resp any] func(ctx context.Context, request Req) (Resp, error)