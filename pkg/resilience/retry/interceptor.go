// pkg/resilience/retry/interceptor.go

package retry

import (
	"context"

	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
	"google.golang.org/grpc"
)

// RetryInterceptor creates a retry interceptor for unary gRPC calls.
// It automatically retries failed calls according to the retry policy.
func RetryInterceptor(retry resilience.Retry) grpc.UnaryServerInterceptor {
	return func(ctx context.Context, req any, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (any, error) {
		// Wrap the handler execution with the retry's Execute method
		// This will retry the handler execution according to the retry policy
		return retry.Execute(ctx, func(ctx context.Context) (any, error) {
			return handler(ctx, req)
		})
	}
}

// RetryStreamInterceptor creates a retry interceptor for streaming gRPC calls.
// Note: Stream establishment is retried, but once a stream is established,
// individual message failures are not retried as that would require
// buffering the entire stream.
func RetryStreamInterceptor(retry resilience.Retry) grpc.StreamServerInterceptor {
	return func(srv any, ss grpc.ServerStream, info *grpc.StreamServerInfo, handler grpc.StreamHandler) error {
		// For stream handlers, we need to adapt the handler to match the function signature
		// expected by the retry.Execute method
		_, err := retry.Execute(ss.Context(), func(ctx context.Context) (any, error) {
			// We ignore the context from Execute since ServerStream already has its own context
			return nil, handler(srv, ss)
		})

		return err
	}
}
