package ratelimit

import (
	"context"
	"testing"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
)

func BenchmarkSlidingWindowRateLimiter_Allow(b *testing.B) {
	options := resilience.RateLimiterOptions{
		Rate: 1000,
	}
	rl := NewSlidingWindowRateLimiter("bench-limiter", options)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		rl.Allow()

		// Periodically clear requests to avoid always returning false
		if i > 0 && i%100 == 0 {
			rl.mutex.Lock()
			rl.requests = rl.requests[:0]
			rl.mutex.Unlock()
		}
	}
}

func BenchmarkSlidingWindowRateLimiter_AllowN(b *testing.B) {
	options := resilience.RateLimiterOptions{
		Rate: 1000,
	}
	rl := NewSlidingWindowRateLimiter("bench-limiter", options)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		rl.AllowN(10)

		// Periodically clear requests to avoid always returning false
		if i > 0 && i%10 == 0 {
			rl.mutex.Lock()
			rl.requests = rl.requests[:0]
			rl.mutex.Unlock()
		}
	}
}

func BenchmarkSlidingWindowRateLimiter_Cleanup(b *testing.B) {
	options := resilience.RateLimiterOptions{
		Rate: 1000,
	}
	rl := NewSlidingWindowRateLimiter("bench-limiter", options)

	// Fill with some requests
	now := time.Now()
	rl.mutex.Lock()
	for i := 0; i < 500; i++ {
		// Half in window, half out of window
		if i < 250 {
			rl.requests = append(rl.requests, now)
		} else {
			rl.requests = append(rl.requests, now.Add(-2*time.Second))
		}
	}
	rl.mutex.Unlock()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		rl.mutex.Lock()
		cutoff := time.Now().Add(-rl.window)

		valid := 0
		for i, t := range rl.requests {
			if t.After(cutoff) {
				rl.requests[valid] = rl.requests[i]
				valid++
			}
		}
		rl.requests = rl.requests[:valid]
		rl.mutex.Unlock()

		// Refill requests periodically to maintain benchmark conditions
		if i > 0 && i%10 == 0 {
			rl.mutex.Lock()
			rl.requests = rl.requests[:0]
			now := time.Now()
			for i := 0; i < 500; i++ {
				if i < 250 {
					rl.requests = append(rl.requests, now)
				} else {
					rl.requests = append(rl.requests, now.Add(-2*time.Second))
				}
			}
			rl.mutex.Unlock()
		}
	}
}

func BenchmarkSlidingWindowRateLimiter_Middleware(b *testing.B) {
	options := resilience.RateLimiterOptions{
		Rate: 10000,
	}
	rl := NewSlidingWindowRateLimiter("bench-limiter", options)

	handler := func(ctx context.Context, req any) (any, error) {
		return "success", nil
	}

	middleware := RateLimiterMiddleware(rl)
	limitedHandler := middleware(handler)
	ctx := context.Background()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		limitedHandler(ctx, "request")

		// Periodically clear requests to avoid always returning false
		if i > 0 && i%100 == 0 {
			rl.mutex.Lock()
			rl.requests = rl.requests[:0]
			rl.mutex.Unlock()
		}
	}
}

func BenchmarkSlidingWindowRateLimiter_Parallel(b *testing.B) {
	options := resilience.RateLimiterOptions{
		Rate: 100000,
	}
	rl := NewSlidingWindowRateLimiter("bench-limiter", options)

	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		localCount := 0
		for pb.Next() {
			rl.Allow()

			// Periodically clear requests locally to avoid contention
			localCount++
			if localCount%100 == 0 {
				rl.mutex.Lock()
				if len(rl.requests) > options.Rate/2 {
					rl.requests = rl.requests[:0]
				}
				rl.mutex.Unlock()
			}
		}
	})
}

func BenchmarkSlidingWindowRateLimiter_WindowSizes(b *testing.B) {
	windowSizes := []int{10, 100, 1000, 10000}

	for _, size := range windowSizes {
		b.Run("Size-"+string(rune(size)), func(b *testing.B) {
			options := resilience.RateLimiterOptions{
				Rate: size,
			}
			rl := NewSlidingWindowRateLimiter("bench-limiter", options)

			// Fill half the window
			for i := 0; i < size/2; i++ {
				rl.Allow()
			}

			b.ResetTimer()
			for i := 0; i < b.N; i++ {
				rl.Allow()

				// Reset periodically
				if i > 0 && i%(size/10) == 0 {
					rl.mutex.Lock()
					rl.requests = rl.requests[:0]
					rl.mutex.Unlock()
				}
			}
		})
	}
}
