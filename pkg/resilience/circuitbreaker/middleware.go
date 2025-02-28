// pkg/resilience/circuitbreaker/middleware.go

package circuitbreaker

import (
	"context"

	"github.com/HeZephyr/GoMicroKit/pkg/service"
)

// CircuitBreakerMiddleware creates a circuit breaker middleware
func CircuitBreakerMiddleware(cb *CircuitBreaker) service.Middleware {
	return func(next service.Handler) service.Handler {
		return func(ctx context.Context, req any) (any, error) {
			result, err := cb.Execute(ctx, func(ctx context.Context) (any, error) {
				return next(ctx, req)
			})
			return result, err
		}
	}
}
