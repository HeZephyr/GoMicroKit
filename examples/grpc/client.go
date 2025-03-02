// examples/grpc/client.go
package main

import (
	"context"
	"io"
	"log"
	"time"

	"github.com/HeZephyr/GoMicroKit/examples/grpc/proto"
	grpctransport "github.com/HeZephyr/GoMicroKit/pkg/transport/grpc"
)

func main() {
	// Create gRPC client connection
	client, err := grpctransport.NewGRPCClient("greeter-client", "localhost:50051")
	if err != nil {
		log.Fatalf("Failed to create client: %v", err)
	}
	defer client.Close()

	// Create gRPC service client using the connection
	greeterClient := proto.NewGreeterClient(client.Conn())

	// Call simple RPC method
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	
	// Send a greeting request
	resp, err := greeterClient.SayHello(ctx, &proto.HelloRequest{Name: "GoMicroKit User"})
	if err != nil {
		log.Fatalf("Could not greet: %v", err)
	}
	log.Printf("Greeting: %s", resp.Message)

	// Call streaming RPC method
	streamCtx, streamCancel := context.WithTimeout(context.Background(), 20*time.Second)
	defer streamCancel()

	// Start the stream
	stream, err := greeterClient.SayHelloStream(streamCtx, &proto.HelloRequest{Name: "Stream User"})
	if err != nil {
		log.Fatalf("Could not start stream: %v", err)
	}

	// Receive streaming responses
	for {
		resp, err := stream.Recv()
		if err == io.EOF {
			// End of stream
			break
		}
		if err != nil {
			log.Fatalf("Stream error: %v", err)
		}
		log.Printf("Stream greeting: %s", resp.Message)
	}
}