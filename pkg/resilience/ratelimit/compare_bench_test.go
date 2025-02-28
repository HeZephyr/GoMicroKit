package ratelimit

import (
	"testing"

	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
)

func BenchmarkCompare_Allow(b *testing.B) {
	options := resilience.RateLimiterOptions{
		Rate:  1000,
		Burst: 100,
	}

	b.Run("TokenBucket", func(b *testing.B) {
		rl := NewTokenBucketRateLimiter("bench-limiter", options)
		b.ResetTimer()
		for i := 0; i < b.N; i++ {
			rl.Allow()
			if i > 0 && i%100 == 0 {
				rl.mutex.Lock()
				rl.tokens = float64(options.Burst)
				rl.mutex.Unlock()
			}
		}
	})

	b.Run("LeakyBucket", func(b *testing.B) {
		rl := NewLeakyBucketRateLimiter("bench-limiter", options)
		b.ResetTimer()
		for i := 0; i < b.N; i++ {
			rl.Allow()
			if i > 0 && i%100 == 0 {
				rl.mutex.Lock()
				rl.water = 0
				rl.mutex.Unlock()
			}
		}
	})

	b.Run("SlidingWindow", func(b *testing.B) {
		rl := NewSlidingWindowRateLimiter("bench-limiter", options)
		b.ResetTimer()
		for i := 0; i < b.N; i++ {
			rl.Allow()
			if i > 0 && i%100 == 0 {
				rl.mutex.Lock()
				rl.requests = rl.requests[:0]
				rl.mutex.Unlock()
			}
		}
	})
}

func BenchmarkCompare_Parallel(b *testing.B) {
	options := resilience.RateLimiterOptions{
		Rate:  10000,
		Burst: 1000,
	}

	b.Run("TokenBucket", func(b *testing.B) {
		rl := NewTokenBucketRateLimiter("bench-limiter", options)
		b.ResetTimer()
		b.RunParallel(func(pb *testing.PB) {
			for pb.Next() {
				rl.Allow()
			}
		})
	})

	b.Run("LeakyBucket", func(b *testing.B) {
		rl := NewLeakyBucketRateLimiter("bench-limiter", options)
		b.ResetTimer()
		b.RunParallel(func(pb *testing.PB) {
			for pb.Next() {
				rl.Allow()
			}
		})
	})

	b.Run("SlidingWindow", func(b *testing.B) {
		rl := NewSlidingWindowRateLimiter("bench-limiter", options)
		b.ResetTimer()
		b.RunParallel(func(pb *testing.PB) {
			for pb.Next() {
				rl.Allow()
			}
		})
	})
}

func BenchmarkCompare_MemoryUsage(b *testing.B) {
	// This benchmark is mainly for observing memory usage patterns
	// rather than execution speed
	rateSizes := []int{100, 1000, 10000}

	for _, rate := range rateSizes {
		options := resilience.RateLimiterOptions{
			Rate:  rate,
			Burst: rate / 10,
		}

		b.Run("TokenBucket-"+string(rune(rate)), func(b *testing.B) {
			rl := NewTokenBucketRateLimiter("bench-limiter", options)
			b.ResetTimer()
			for i := 0; i < b.N; i++ {
				for j := 0; j < 1000; j++ {
					rl.Allow()
				}
				// Reset to maintain constant memory usage
				rl.Reset()
			}
		})

		b.Run("LeakyBucket-"+string(rune(rate)), func(b *testing.B) {
			rl := NewLeakyBucketRateLimiter("bench-limiter", options)
			b.ResetTimer()
			for i := 0; i < b.N; i++ {
				for j := 0; j < 1000; j++ {
					rl.Allow()
				}
				// Reset to maintain constant memory usage
				rl.Reset()
			}
		})

		b.Run("SlidingWindow-"+string(rune(rate)), func(b *testing.B) {
			rl := NewSlidingWindowRateLimiter("bench-limiter", options)
			b.ResetTimer()
			for i := 0; i < b.N; i++ {
				for j := 0; j < 1000; j++ {
					rl.Allow()
				}
				// Reset to maintain constant memory usage
				rl.Reset()
			}
		})
	}
}

func BenchmarkCompare_BurstHandling(b *testing.B) {
	options := resilience.RateLimiterOptions{
		Rate:  1000,
		Burst: 1000,
	}

	b.Run("TokenBucket", func(b *testing.B) {
		rl := NewTokenBucketRateLimiter("bench-limiter", options)
		b.ResetTimer()
		for i := 0; i < b.N; i++ {
			// Simulate burst of 100 requests
			for j := 0; j < 100; j++ {
				rl.Allow()
			}
			// Reset for next iteration
			rl.mutex.Lock()
			rl.tokens = float64(options.Burst)
			rl.mutex.Unlock()
		}
	})

	b.Run("LeakyBucket", func(b *testing.B) {
		rl := NewLeakyBucketRateLimiter("bench-limiter", options)
		b.ResetTimer()
		for i := 0; i < b.N; i++ {
			// Simulate burst of 100 requests
			for j := 0; j < 100; j++ {
				rl.Allow()
			}
			// Reset for next iteration
			rl.mutex.Lock()
			rl.water = 0
			rl.mutex.Unlock()
		}
	})

	b.Run("SlidingWindow", func(b *testing.B) {
		rl := NewSlidingWindowRateLimiter("bench-limiter", options)
		b.ResetTimer()
		for i := 0; i < b.N; i++ {
			// Simulate burst of 100 requests
			for j := 0; j < 100; j++ {
				rl.Allow()
			}
			// Reset for next iteration
			rl.mutex.Lock()
			rl.requests = rl.requests[:0]
			rl.mutex.Unlock()
		}
	})
}
