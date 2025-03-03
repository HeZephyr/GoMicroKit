package retry

import (
	"context"

	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
	"github.com/HeZephyr/GoMicroKit/pkg/service"
)

// RetryMiddleware creates a retry middleware
func RetryMiddleware(retry resilience.Retry) service.Middleware {
	return func(next service.Handler) service.Handler {
		return func(ctx context.Context, req any) (any, error) {
			return retry.Execute(ctx, func(ctx context.Context) (any, error) {
				return next(ctx, req)
			})
		}
	}
}
