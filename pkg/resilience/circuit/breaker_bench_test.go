package circuit

import (
	"context"
	"testing"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
)

func BenchmarkBreakerAllow(b *testing.B) {
	cb := NewBreaker("test", resilience.CircuitBreakerOptions{
		Threshold:   5,
		Timeout:     time.Second,
		HalfOpenMax: 2,
	})

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		cb.Allow()
	}
}

func BenchmarkBreakerSuccess(b *testing.B) {
	cb := NewBreaker("test", resilience.CircuitBreakerOptions{
		Threshold:   5,
		Timeout:     time.Second,
		HalfOpenMax: 2,
	})

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		cb.Success()
	}
}

func BenchmarkBreakerFailure(b *testing.B) {
	cb := NewBreaker("test", resilience.CircuitBreakerOptions{
		Threshold:   1000000, // Large threshold to prevent state change during benchmark
		Timeout:     time.Second,
		HalfOpenMax: 2,
	})

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		cb.Failure()
	}
}

func BenchmarkBreakerExecute(b *testing.B) {
	cb := NewBreaker("test", resilience.CircuitBreakerOptions{
		Threshold:   5,
		Timeout:     time.Second,
		HalfOpenMax: 2,
	})

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_, _ = cb.Execute(context.Background(), func(ctx context.Context) (any, error) {
			return nil, nil
		})
	}
}
