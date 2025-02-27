// pkg/transport/transport.go
package transport

import (
	"context"
	"io"

	"github.com/HeZephyr/GoMicroKit/pkg/service"
)

// Transport represents a communication transport layer
type Transport interface {
	// Name returns the transport name (e.g., "http", "grpc")
	Name() string

	// Serve starts the transport server
	Serve(addr string) error

	// Stop stops the transport server
	Stop(ctx context.Context) error

	// Register registers a service with the transport
	Register(svc service.Service) error
}

// Codec handles encoding and decoding of requests and responses
type Codec interface {
	// ContentType returns the content type this codec handles
	ContentType() string

	// Encode encodes the value to the writer
	Encode(ctx context.Context, w io.Writer, v any) error

	// Decode decodes from the reader to the value pointer
	Decode(ctx context.Context, r io.Reader, v any) error
}

// Client represents a transport client
type Client interface {
	// Name returns the client name
	Name() string

	// Call invokes a remote endpoint
	Call(ctx context.Context, serviceName, endpointName string, req, resp any) error

	// Close closes the client
	Close() error
}
