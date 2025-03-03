// pkg/transport/grpc/client.go
package grpc

import (
	"context"
	"fmt"
	"time"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/keepalive"

	"github.com/HeZephyr/GoMicroKit/pkg/transport"
)

// Client represents a gRPC client that implements transport.Client
type Client struct {
	conn *grpc.ClientConn
	name string
}

// Verify at compile time that Client implements transport.Client
var _ transport.Client = (*Client)(nil)

// NewClient creates a new gRPC client
func NewClient(name string, target string, options ...grpc.DialOption) (*Client, error) {
	// Default dial options
	defaultOptions := []grpc.DialOption{
		// Use insecure credentials for demo purposes. In production, use proper TLS.
		grpc.WithTransportCredentials(insecure.NewCredentials()),
		grpc.WithKeepaliveParams(keepalive.ClientParameters{
			Time:                10 * time.Second, // Send pings every 10 seconds if no activity
			Timeout:             5 * time.Second,  // Wait 5 seconds for ping ack before considering connection dead
			PermitWithoutStream: true,             // Send pings even without active streams
		}),
	}

	// Combine default options with user options
	allOptions := append(defaultOptions, options...)

	// Establish connection
	conn, err := grpc.NewClient(target, allOptions...)
	if err != nil {
		return nil, err
	}

	return &Client{
		conn: conn,
		name: name,
	}, nil
}

// Name returns the client name - implements part of transport.Client interface
func (c *Client) Name() string {
	return c.name
}

// Call invokes a remote endpoint - implements part of transport.Client interface
func (c *Client) Call(ctx context.Context, serviceName, endpointName string, req, resp any) error {
	// For gRPC, we recommend using generated clients instead of this generic method
	return fmt.Errorf("direct gRPC calls via Call() not supported, use generated gRPC clients")
}

// Close closes the client - implements part of transport.Client interface
func (c *Client) Close() error {
	if c.conn != nil {
		return c.conn.Close()
	}
	return nil
}

// Conn returns the underlying gRPC client connection
// This allows users to create specific gRPC clients
func (c *Client) Conn() *grpc.ClientConn {
	return c.conn
}
