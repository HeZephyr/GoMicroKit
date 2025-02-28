package ratelimit

import (
	"context"

	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
	"github.com/HeZephyr/GoMicroKit/pkg/service"
)

// RateLimiterMiddleware creates a rate limiter middleware
func RateLimiterMiddleware(rl resilience.RateLimiter) service.Middleware {
	return func(next service.Handler) service.Handler {
		return func(ctx context.Context, req any) (any, error) {
			if !rl.Allow() {
				return nil, resilience.ErrRateLimited
			}
			return next(ctx, req)
		}
	}
}
