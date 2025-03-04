// pkg/resilience/circuitbreaker/interceptor.go

package circuitbreaker

import (
	"context"

	"google.golang.org/grpc"
)

// CircuitBreakerInterceptor creates a circuit breaker interceptor for unary gRPC calls.
// It uses the circuit breaker to determine whether to allow the call to proceed
// or to fail fast based on the circuit's current state.
func CircuitBreakerInterceptor(cb *CircuitBreaker) grpc.UnaryServerInterceptor {
	return func(ctx context.Context, req any, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (any, error) {
		// Wrap the handler execution with the circuit breaker's Execute method
		// This ensures that the circuit breaker logic is applied to the gRPC call
		result, err := cb.Execute(ctx, func(ctx context.Context) (any, error) {
			return handler(ctx, req)
		})

		return result, err
	}
}

// CircuitBreakerStreamInterceptor creates a circuit breaker interceptor for streaming gRPC calls.
// It applies the same circuit breaker logic to streaming RPCs.
// Note: For streaming RPCs, the circuit breaker protects the stream establishment,
// but not individual messages within the stream.
func CircuitBreakerStreamInterceptor(cb *CircuitBreaker) grpc.StreamServerInterceptor {
	return func(srv any, ss grpc.ServerStream, info *grpc.StreamServerInfo, handler grpc.StreamHandler) error {
		// For stream handlers, we need a function that returns (any, error) to use with Execute
		// Since stream handlers return only error, we'll use nil as the result value
		_, err := cb.Execute(ss.Context(), func(ctx context.Context) (any, error) {
			// We ignore the context from Execute since ServerStream already has its own context
			return nil, handler(srv, ss)
		})

		return err
	}
}
