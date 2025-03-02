// pkg/transport/grpc/server.go
package grpc

import (
	"context"
	"fmt"
	"net"
	"time"

	"google.golang.org/grpc"
	"google.golang.org/grpc/keepalive"
	"google.golang.org/grpc/reflection"

	"github.com/HeZephyr/GoMicroKit/pkg/service"
	"github.com/HeZephyr/GoMicroKit/pkg/transport"
)

// Server represents a gRPC server that implements transport.Transport
type Server struct {
	server   *grpc.Server
	services map[string]service.Service
	options  []grpc.ServerOption
	listener net.Listener
}

// Verify at compile time that Server implements transport.Transport
var _ transport.Transport = (*Server)(nil)

// NewServer creates a new gRPC server
func NewServer(options ...grpc.ServerOption) *Server {
	// Default server options for production use
	defaultOptions := []grpc.ServerOption{
		grpc.KeepaliveParams(keepalive.ServerParameters{
			MaxConnectionIdle:     time.Minute,        // How long a client can be idle before being closed
			MaxConnectionAge:      5 * time.Minute,    // Maximum lifetime of any connection
			MaxConnectionAgeGrace: 20 * time.Second,   // Grace period after MaxConnectionAge
			Time:                  30 * time.Second,   // Ping interval for keepalive
			Timeout:               10 * time.Second,   // Timeout for ping response
		}),
	}

	// Combine default options with user options
	allOptions := append(defaultOptions, options...)

	return &Server{
		services: make(map[string]service.Service),
		options:  allOptions,
	}
}

// Name returns the transport name - implements part of transport.Transport interface
func (s *Server) Name() string {
	return "grpc"
}

// Serve starts the gRPC server - implements part of transport.Transport interface
func (s *Server) Serve(addr string) error {
	// Create server with options
	s.server = grpc.NewServer(s.options...)

	// Register all services
	for _, svc := range s.services {
		// Check if service implements the GRPCServiceRegistrar interface
		if grpcSvc, ok := svc.(GRPCServiceRegistrar); ok {
			grpcSvc.RegisterWithGRPC(s.server)
		} else {
			return fmt.Errorf("service %s does not implement GRPCServiceRegistrar", svc.Name())
		}
	}

	// Enable reflection service (useful for grpcurl and other tools)
	reflection.Register(s.server)

	// Start listening
	var err error
	s.listener, err = net.Listen("tcp", addr)
	if err != nil {
		return fmt.Errorf("failed to listen: %w", err)
	}

	// Start server
	return s.server.Serve(s.listener)
}

// Stop stops the gRPC server - implements part of transport.Transport interface
func (s *Server) Stop(ctx context.Context) error {
	if s.server != nil {
		// GracefulStop will wait for all RPCs to finish
		stopped := make(chan struct{})
		go func() {
			s.server.GracefulStop()
			close(stopped)
		}()

		// Wait for graceful stop or context deadline
		select {
		case <-stopped:
			return nil
		case <-ctx.Done():
			// Force stop if context times out
			s.server.Stop()
			return ctx.Err()
		}
	}
	return nil
}

// Register registers a service with the server - implements part of transport.Transport interface
func (s *Server) Register(svc service.Service) error {
	s.services[svc.Name()] = svc
	return nil
}

// GRPCServer returns the underlying gRPC server
func (s *Server) GRPCServer() *grpc.Server {
	return s.server
}