// examples/grpc/server.go
package main

import (
	"context"
	"log"
	"time"

	"google.golang.org/grpc"
	
	"github.com/HeZephyr/GoMicroKit/examples/grpc/proto"
	"github.com/HeZephyr/GoMicroKit/pkg/service"
	grpctransport "github.com/HeZephyr/GoMicroKit/pkg/transport/grpc"
)

// GreeterService wraps the gRPC implementation and satisfies the Service interface
type GreeterService struct {
	*service.BaseService
	implementation *greeterServer
}

// RegisterWithGRPC implements the GRPCServiceRegistrar interface
func (s *GreeterService) RegisterWithGRPC(server *grpc.Server) {
	proto.RegisterGreeterServer(server, s.implementation)
}

// greeterServer is the implementation of the gRPC generated server interface
type greeterServer struct {
	proto.UnimplementedGreeterServer
}

// SayHello implements the SayHello method from the gRPC service
func (s *greeterServer) SayHello(ctx context.Context, req *proto.HelloRequest) (*proto.HelloResponse, error) {
	log.Printf("Received greeting request for: %s", req.Name)
	return &proto.HelloResponse{
		Message: "Hello, " + req.Name + "!",
	}, nil
}

// SayHelloStream implements the streaming greeting method from the gRPC service
func (s *greeterServer) SayHelloStream(req *proto.HelloRequest, stream proto.Greeter_SayHelloStreamServer) error {
	// Send 5 streaming responses with a 1-second delay between each
	for i := 0; i < 5; i++ {
		if err := stream.Send(&proto.HelloResponse{
			Message: "Hello, " + req.Name + "! (stream message " + string(i+'1') + ")",
		}); err != nil {
			return err
		}
		time.Sleep(1 * time.Second)
	}
	return nil
}

func main() {
	// Create a new gRPC server
	server := grpctransport.NewGRPCServer()
	
	// Create service implementation
	impl := &greeterServer{}
	
	// Create and configure the service
	svc := &GreeterService{
		BaseService:    service.NewService("greeter", "1.0.0"),
		implementation: impl,
	}
	
	// Register the service with the transport
	if err := server.Register(svc); err != nil {
		log.Fatalf("Failed to register service: %v", err)
	}
	
	// Start the server
	log.Println("Starting gRPC server on :50051")
	if err := server.Serve(":50051"); err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}
}