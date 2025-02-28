package retry

import (
	"context"
	"errors"
	"testing"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
	"github.com/HeZephyr/GoMicroKit/pkg/service"
)

func BenchmarkRetry_Execute_Success(b *testing.B) {
	retry := NewRetry("bench-retry", DefaultOptions())
	ctx := context.Background()

	// Function that always succeeds
	fn := func(ctx context.Context) (any, error) {
		return "success", nil
	}

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		retry.Execute(ctx, fn)
	}
}

func BenchmarkRetry_Execute_EventualSuccess(b *testing.B) {
	retry := NewRetry("bench-retry", resilience.RetryOptions{
		Attempts:      3,
		Delay:         1 * time.Nanosecond, // Minimal delay for benchmarking
		RetryableFunc: RetryAll(),
	})
	ctx := context.Background()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		// Reset count for each benchmark iteration
		attemptCount := 0

		retry.Execute(ctx, func(ctx context.Context) (any, error) {
			attemptCount++
			if attemptCount < 3 {
				return nil, errors.New("error")
			}
			return "success", nil
		})
	}
}

func BenchmarkRetry_Execute_AlwaysFail(b *testing.B) {
	retry := NewRetry("bench-retry", resilience.RetryOptions{
		Attempts:      3,
		Delay:         1 * time.Nanosecond, // Minimal delay for benchmarking
		RetryableFunc: RetryAll(),
	})
	ctx := context.Background()

	// Function that always fails
	fn := func(ctx context.Context) (any, error) {
		return nil, errors.New("error")
	}

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		retry.Execute(ctx, fn)
	}
}

func BenchmarkRetry_CalculateBackoff(b *testing.B) {
	retry := NewRetry("bench-retry", DefaultOptions())

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		retry.calculateBackoff(i % 5) // Use different attempt numbers
	}
}

func BenchmarkRetry_Middleware(b *testing.B) {
	retry := NewRetry("bench-retry", resilience.RetryOptions{
		Attempts:      3,
		Delay:         1 * time.Nanosecond, // Minimal delay for benchmarking
		RetryableFunc: RetryAll(),
	})

	handler := func(ctx context.Context, req any) (any, error) {
		return "success", nil
	}

	middleware := Middleware(retry)
	retryHandler := middleware(handler)
	ctx := context.Background()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		retryHandler(ctx, "request")
	}
}

func BenchmarkRetry_Middleware_WithRetries(b *testing.B) {
	retry := NewRetry("bench-retry", resilience.RetryOptions{
		Attempts:      3,
		Delay:         1 * time.Nanosecond, // Minimal delay for benchmarking
		RetryableFunc: RetryAll(),
	})

	middleware := Middleware(retry)
	ctx := context.Background()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		// Reset count for each benchmark iteration
		attemptCount := 0

		handler := func(ctx context.Context, req any) (any, error) {
			attemptCount++
			if attemptCount < 3 {
				return nil, errors.New("error")
			}
			return "success", nil
		}

		retryHandler := middleware(handler)
		retryHandler(ctx, "request")
	}
}

func BenchmarkRetry_MiddlewareChain(b *testing.B) {
	retry := NewRetry("bench-retry", resilience.RetryOptions{
		Attempts:      3,
		Delay:         1 * time.Nanosecond, // Minimal delay for benchmarking
		RetryableFunc: RetryAll(),
	})

	handler := func(ctx context.Context, req any) (any, error) {
		return "success", nil
	}

	retryMiddleware := Middleware(retry)
	loggingMiddleware := func(next service.Handler) service.Handler {
		return func(ctx context.Context, req any) (any, error) {
			return next(ctx, req)
		}
	}

	chain := service.Chain(loggingMiddleware, retryMiddleware)
	chainedHandler := chain(handler)
	ctx := context.Background()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		chainedHandler(ctx, "request")
	}
}

func BenchmarkRetryStrategies(b *testing.B) {
	err := errors.New("network connection reset")

	b.Run("NetworkErrorsOnly", func(b *testing.B) {
		strategy := NetworkErrorsOnly()
		b.ResetTimer()
		for i := 0; i < b.N; i++ {
			strategy(err)
		}
	})

	b.Run("RetryAll", func(b *testing.B) {
		strategy := RetryAll()
		b.ResetTimer()
		for i := 0; i < b.N; i++ {
			strategy(err)
		}
	})

	b.Run("RetryNone", func(b *testing.B) {
		strategy := RetryNone()
		b.ResetTimer()
		for i := 0; i < b.N; i++ {
			strategy(err)
		}
	})

	b.Run("Combine", func(b *testing.B) {
		strategy := Combine(NetworkErrorsOnly(), RetryAll())
		b.ResetTimer()
		for i := 0; i < b.N; i++ {
			strategy(err)
		}
	})

	b.Run("HTTPStatusCodeRetry", func(b *testing.B) {
		strategy := HTTPStatusCodeRetry(500, 503)
		httpErr := mockHTTPError{statusCode: 500}
		b.ResetTimer()
		for i := 0; i < b.N; i++ {
			strategy(httpErr)
		}
	})
}

func BenchmarkRetry_DifferentRetryOptions(b *testing.B) {
	ctx := context.Background()

	// Function that always fails
	fn := func(ctx context.Context) (any, error) {
		return nil, errors.New("error")
	}

	b.Run("Few-Attempts", func(b *testing.B) {
		retry := NewRetry("bench-retry", resilience.RetryOptions{
			Attempts:      2,
			Delay:         1 * time.Nanosecond,
			RetryableFunc: RetryAll(),
		})

		b.ResetTimer()
		for i := 0; i < b.N; i++ {
			retry.Execute(ctx, fn)
		}
	})

	b.Run("Many-Attempts", func(b *testing.B) {
		retry := NewRetry("bench-retry", resilience.RetryOptions{
			Attempts:      10,
			Delay:         1 * time.Nanosecond,
			RetryableFunc: RetryAll(),
		})

		b.ResetTimer()
		for i := 0; i < b.N; i++ {
			retry.Execute(ctx, fn)
		}
	})

	b.Run("Complex-RetryFunc", func(b *testing.B) {
		retry := NewRetry("bench-retry", resilience.RetryOptions{
			Attempts: 3,
			Delay:    1 * time.Nanosecond,
			RetryableFunc: Combine(
				NetworkErrorsOnly(),
				HTTPStatusCodeRetry(500, 502, 503, 504),
				TemporaryErrorsOnly(),
			),
		})

		b.ResetTimer()
		for i := 0; i < b.N; i++ {
			retry.Execute(ctx, fn)
		}
	})
}
