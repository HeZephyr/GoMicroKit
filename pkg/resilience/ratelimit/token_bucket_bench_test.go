package ratelimit

import (
	"context"
	"testing"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
	"github.com/HeZephyr/GoMicroKit/pkg/service"
)

func BenchmarkTokenBucketRateLimiter_Allow(b *testing.B) {
	options := resilience.RateLimiterOptions{
		Rate:  1000,
		Burst: 100,
	}
	rl := NewTokenBucketRateLimiter("bench-limiter", options)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		rl.Allow()

		// Periodically refill tokens to avoid always returning false
		if i > 0 && i%100 == 0 {
			rl.mutex.Lock()
			rl.tokens = float64(options.Burst)
			rl.mutex.Unlock()
		}
	}
}

func BenchmarkTokenBucketRateLimiter_AllowN(b *testing.B) {
	options := resilience.RateLimiterOptions{
		Rate:  1000,
		Burst: 1000,
	}
	rl := NewTokenBucketRateLimiter("bench-limiter", options)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		rl.AllowN(10)

		// Periodically refill tokens to avoid always returning false
		if i > 0 && i%10 == 0 {
			rl.mutex.Lock()
			rl.tokens = float64(options.Burst)
			rl.mutex.Unlock()
		}
	}
}

func BenchmarkTokenBucketRateLimiter_Refill(b *testing.B) {
	options := resilience.RateLimiterOptions{
		Rate:  1000,
		Burst: 1000,
	}
	rl := NewTokenBucketRateLimiter("bench-limiter", options)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		rl.mutex.Lock()
		now := time.Now()
		elapsed := now.Sub(rl.lastRefill).Seconds()
		rl.tokens += elapsed * rl.rate
		if rl.tokens > float64(rl.burst) {
			rl.tokens = float64(rl.burst)
		}
		rl.lastRefill = now
		rl.mutex.Unlock()
	}
}

func BenchmarkTokenBucketRateLimiter_Middleware(b *testing.B) {
	options := resilience.RateLimiterOptions{
		Rate:  10000,
		Burst: 1000,
	}
	rl := NewTokenBucketRateLimiter("bench-limiter", options)

	handler := func(ctx context.Context, req any) (any, error) {
		return "success", nil
	}

	middleware := RateLimitMiddleware(rl)
	limitedHandler := middleware(handler)
	ctx := context.Background()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_, err := limitedHandler(ctx, "request")
		if err != nil {
			b.Fatalf("Expected no error, got: %v", err)
		}

		// Periodically refill tokens to avoid always returning false
		if i > 0 && i%100 == 0 {
			rl.mutex.Lock()
			rl.tokens = float64(options.Burst)
			rl.mutex.Unlock()
		}
	}
}

func BenchmarkTokenBucketRateLimiter_Parallel(b *testing.B) {
	options := resilience.RateLimiterOptions{
		Rate:  100000,
		Burst: 10000,
	}
	rl := NewTokenBucketRateLimiter("bench-limiter", options)

	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			rl.Allow()
		}
	})
}

func BenchmarkTokenBucketRateLimiter_MiddlewareChain(b *testing.B) {
	options := resilience.RateLimiterOptions{
		Rate:  10000,
		Burst: 1000,
	}
	rl := NewTokenBucketRateLimiter("bench-limiter", options)

	handler := func(ctx context.Context, req any) (any, error) {
		return "success", nil
	}

	loggingMiddleware := func(next service.Handler) service.Handler {
		return func(ctx context.Context, req any) (any, error) {
			return next(ctx, req)
		}
	}

	rateLimiterMiddleware := RateLimitMiddleware(rl)
	chain := service.Chain(loggingMiddleware, rateLimiterMiddleware)
	limitedHandler := chain(handler)
	ctx := context.Background()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_, err := limitedHandler(ctx, "request")
		if err != nil {
			b.Fatalf("Expected no error, got: %v", err)
		}

		// Periodically refill tokens to avoid always returning false
		if i > 0 && i%100 == 0 {
			rl.mutex.Lock()
			rl.tokens = float64(options.Burst)
			rl.mutex.Unlock()
		}
	}
}
