// pkg/resilience/ratelimit/interceptor.go
package ratelimit

import (
	"context"

	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

// RateLimitInterceptor creates a rate limit interceptor for unary gRPC calls
func RateLimitInterceptor(rl resilience.RateLimiter) grpc.UnaryServerInterceptor {
	return func(ctx context.Context, req any, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (any, error) {
		if !rl.Allow() {
			// Convert the generic error to a gRPC-specific status error
			// Without this conversion, the error would be sent as codes.Unknown
			// which doesn't properly represent a rate limiting scenario
			return nil, status.Error(codes.ResourceExhausted, resilience.ErrRateLimited.Error())
		}
		return handler(ctx, req)
	}
}

// RateLimitStreamInterceptor creates a rate limit interceptor for streaming gRPC calls
func RateLimitStreamInterceptor(rl resilience.RateLimiter) grpc.StreamServerInterceptor {
	return func(srv any, ss grpc.ServerStream, info *grpc.StreamServerInfo, handler grpc.StreamHandler) error {
		if !rl.Allow() {
			// Use ResourceExhausted code which is the standard for rate limiting in gRPC
			// This allows clients to properly handle the rate limiting scenario
			// and implement appropriate backoff strategies
			return status.Error(codes.ResourceExhausted, resilience.ErrRateLimited.Error())
		}
		return handler(srv, ss)
	}
}
