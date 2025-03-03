// pkg/service/service.go
package service

import (
	"context"
	"fmt"
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
	Handler() any

	// RequestType returns the type of request object
	RequestType() reflect.Type

	// ResponseType returns the type of response object
	ResponseType() reflect.Type

	// Metadata returns the endpoint metadata
	Metadata() map[string]string
}

// HandlerFunc is the standard function signature for service handlers
type HandlerFunc[Req, Resp any] func(ctx context.Context, request Req) (Resp, error)

// Handler is a generic handler function
type Handler func(ctx context.Context, request any) (any, error)

// Middleware is a function that wraps a handler
type Middleware func(Handler) Handler

// Chain chains multiple middlewares into one
func Chain(middlewares ...Middleware) Middleware {
	return func(next Handler) Handler {
		for i := len(middlewares) - 1; i >= 0; i-- {
			next = middlewares[i](next)
		}
		return next
	}
}

// ApplyMiddleware applies middleware to a handler function
func ApplyMiddleware[Req, Resp any](handler HandlerFunc[Req, Resp], middleware Middleware) HandlerFunc[Req, Resp] {
	// Convert typed handler to generic handler
	genericHandler := func(ctx context.Context, req any) (any, error) {
		typedReq, ok := req.(Req)
		if !ok {
			return nil, fmt.Errorf("invalid request type: expected %T, got %T", *new(Req), req)
		}
		return handler(ctx, typedReq)
	}

	// Apply middleware
	wrappedGenericHandler := middleware(genericHandler)

	// Convert back to typed handler
	return func(ctx context.Context, req Req) (Resp, error) {
		resp, err := wrappedGenericHandler(ctx, req)
		if err != nil {
			var zero Resp
			return zero, err
		}

		typedResp, ok := resp.(Resp)
		if !ok {
			var zero Resp
			return zero, fmt.Errorf("invalid response type: expected %T, got %T", *new(Resp), resp)
		}
		return typedResp, nil
	}
}
