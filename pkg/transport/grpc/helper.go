// pkg/transport/grpc/helper.go
package grpc

import (
	"google.golang.org/grpc"
)

// GRPCServiceRegistrar is an interface for registering gRPC services
type GRPCServiceRegistrar interface {
	// RegisterWithGRPC registers the service with a gRPC server
	RegisterWithGRPC(grpcServer *grpc.Server)
}

// ServerOption represents an option for creating a gRPC server
type ServerOption func(*serverOptions)

type serverOptions struct {
	grpcOptions []grpc.ServerOption
}

// WithServerOptions adds server options to the server
func WithServerOptions(opts ...grpc.ServerOption) ServerOption {
	return func(o *serverOptions) {
		o.grpcOptions = append(o.grpcOptions, opts...)
	}
}

// NewGRPCServer creates a new gRPC server with the specified options
func NewGRPCServer(opts ...ServerOption) *Server {
	options := &serverOptions{}

	for _, opt := range opts {
		opt(options)
	}

	return NewServer(options.grpcOptions...)
}

// ClientOption represents an option for creating a gRPC client
type ClientOption func(*clientOptions)

type clientOptions struct {
	dialOptions []grpc.DialOption
}

// WithDialOptions adds dial options to the client
func WithDialOptions(opts ...grpc.DialOption) ClientOption {
	return func(o *clientOptions) {
		o.dialOptions = append(o.dialOptions, opts...)
	}
}

// NewGRPCClient creates a new gRPC client with the specified options
func NewGRPCClient(name, target string, opts ...ClientOption) (*Client, error) {
	options := &clientOptions{}

	for _, opt := range opts {
		opt(options)
	}

	return NewClient(name, target, options.dialOptions...)
}
