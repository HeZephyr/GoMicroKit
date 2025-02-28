package ratelimit

import (
	"context"
	"testing"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
)

func BenchmarkLeakyBucketRateLimiter_Allow(b *testing.B) {
	options := resilience.RateLimiterOptions{
		Rate:  1000,
		Burst: 100,
	}
	rl := NewLeakyBucketRateLimiter("bench-limiter", options)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		rl.Allow()

		// Periodically leak water to avoid always returning false
		if i > 0 && i%100 == 0 {
			rl.mutex.Lock()
			rl.water = 0
			rl.mutex.Unlock()
		}
	}
}

func BenchmarkLeakyBucketRateLimiter_AllowN(b *testing.B) {
	options := resilience.RateLimiterOptions{
		Rate:  1000,
		Burst: 1000,
	}
	rl := NewLeakyBucketRateLimiter("bench-limiter", options)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		rl.AllowN(10)

		// Periodically leak water to avoid always returning false
		if i > 0 && i%10 == 0 {
			rl.mutex.Lock()
			rl.water = 0
			rl.mutex.Unlock()
		}
	}
}

func BenchmarkLeakyBucketRateLimiter_Leak(b *testing.B) {
	options := resilience.RateLimiterOptions{
		Rate:  1000,
		Burst: 1000,
	}
	rl := NewLeakyBucketRateLimiter("bench-limiter", options)

	// Fill the bucket halfway
	rl.mutex.Lock()
	rl.water = float64(options.Burst) / 2
	rl.mutex.Unlock()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		rl.mutex.Lock()
		now := time.Now()
		elapsed := now.Sub(rl.lastLeakTime).Seconds()
		leaked := elapsed * rl.rate
		rl.water -= leaked
		if rl.water < 0 {
			rl.water = 0
		}
		rl.lastLeakTime = now
		rl.mutex.Unlock()

		// Refill periodically to maintain benchmark conditions
		if i > 0 && i%100 == 0 {
			rl.mutex.Lock()
			rl.water = float64(options.Burst) / 2
			rl.mutex.Unlock()
		}
	}
}

func BenchmarkLeakyBucketRateLimiter_Middleware(b *testing.B) {
	options := resilience.RateLimiterOptions{
		Rate:  10000,
		Burst: 1000,
	}
	rl := NewLeakyBucketRateLimiter("bench-limiter", options)

	handler := func(ctx context.Context, req any) (any, error) {
		return "success", nil
	}

	middleware := RateLimiterMiddleware(rl)
	limitedHandler := middleware(handler)
	ctx := context.Background()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		limitedHandler(ctx, "request")

		// Periodically leak water to avoid always returning false
		if i > 0 && i%100 == 0 {
			rl.mutex.Lock()
			rl.water = 0
			rl.mutex.Unlock()
		}
	}
}

func BenchmarkLeakyBucketRateLimiter_Parallel(b *testing.B) {
	options := resilience.RateLimiterOptions{
		Rate:  100000,
		Burst: 10000,
	}
	rl := NewLeakyBucketRateLimiter("bench-limiter", options)

	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		localCount := 0
		for pb.Next() {
			rl.Allow()

			// Periodically reset locally to avoid contention
			localCount++
			if localCount%100 == 0 {
				rl.mutex.Lock()
				if rl.water > float64(options.Burst)/2 {
					rl.water = 0
				}
				rl.mutex.Unlock()
			}
		}
	})
}

func BenchmarkLeakyBucketRateLimiter_CapacitySizes(b *testing.B) {
	capacitySizes := []int{10, 100, 1000, 10000}

	for _, size := range capacitySizes {
		b.Run("Capacity-"+string(rune(size)), func(b *testing.B) {
			options := resilience.RateLimiterOptions{
				Rate:  1000,
				Burst: size,
			}
			rl := NewLeakyBucketRateLimiter("bench-limiter", options)

			// Fill half the capacity
			rl.mutex.Lock()
			rl.water = float64(size) / 2
			rl.mutex.Unlock()

			b.ResetTimer()
			for i := 0; i < b.N; i++ {
				rl.Allow()

				// Reset periodically
				if i > 0 && i%(size/10) == 0 {
					rl.mutex.Lock()
					rl.water = float64(size) / 2
					rl.mutex.Unlock()
				}
			}
		})
	}
}

func BenchmarkLeakyBucketRateLimiter_RateSizes(b *testing.B) {
	rateSizes := []int{10, 100, 1000, 10000}

	for _, rate := range rateSizes {
		b.Run("Rate-"+string(rune(rate)), func(b *testing.B) {
			options := resilience.RateLimiterOptions{
				Rate:  rate,
				Burst: 1000,
			}
			rl := NewLeakyBucketRateLimiter("bench-limiter", options)

			// Fill half the capacity
			rl.mutex.Lock()
			rl.water = 500
			rl.lastLeakTime = time.Now().Add(-100 * time.Millisecond)
			rl.mutex.Unlock()

			b.ResetTimer()
			for i := 0; i < b.N; i++ {
				rl.Allow()

				// Reset periodically
				if i > 0 && i%100 == 0 {
					rl.mutex.Lock()
					rl.water = 500
					rl.lastLeakTime = time.Now()
					rl.mutex.Unlock()
				}
			}
		})
	}
}
