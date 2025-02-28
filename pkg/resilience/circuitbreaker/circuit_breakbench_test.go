package circuitbreaker

import (
	"context"
	"errors"
	"testing"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
)

func BenchmarkCircuitBreaker_Allow(b *testing.B) {
	options := resilience.CircuitBreakerOptions{
		Threshold:   1000,
		Timeout:     1 * time.Second,
		HalfOpenMax: 100,
	}
	cb := NewCircuitBreaker("bench-circuit", options)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		cb.Allow()
	}
}

func BenchmarkCircuitBreaker_Success(b *testing.B) {
	options := resilience.CircuitBreakerOptions{
		Threshold:   1000,
		Timeout:     1 * time.Second,
		HalfOpenMax: 100,
	}
	cb := NewCircuitBreaker("bench-circuit", options)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		cb.Success()
	}
}

func BenchmarkCircuitBreaker_Failure(b *testing.B) {
	options := resilience.CircuitBreakerOptions{
		Threshold:   1000,
		Timeout:     1 * time.Second,
		HalfOpenMax: 100,
	}
	cb := NewCircuitBreaker("bench-circuit", options)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		cb.Failure()
		// Reset after every 100 failures to avoid state change
		if i > 0 && i%100 == 0 {
			cb.Reset()
		}
	}
}

func BenchmarkCircuitBreaker_Execute_Success(b *testing.B) {
	options := resilience.CircuitBreakerOptions{
		Threshold:   1000,
		Timeout:     1 * time.Second,
		HalfOpenMax: 100,
	}
	cb := NewCircuitBreaker("bench-circuit", options)
	ctx := context.Background()

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_, _ = cb.Execute(ctx, func(ctx context.Context) (any, error) {
			return "success", nil
		})
	}
}

func BenchmarkCircuitBreaker_Execute_Failure(b *testing.B) {
	options := resilience.CircuitBreakerOptions{
		Threshold:   1000,
		Timeout:     1 * time.Second,
		HalfOpenMax: 100,
	}
	cb := NewCircuitBreaker("bench-circuit", options)
	ctx := context.Background()
	testErr := errors.New("test error")

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		_, _ = cb.Execute(ctx, func(ctx context.Context) (any, error) {
			return nil, testErr
		})
		// Reset after every 100 failures to avoid state change
		if i > 0 && i%100 == 0 {
			cb.Reset()
		}
	}
}

func BenchmarkCircuitBreaker_Execute_Mixed(b *testing.B) {
	options := resilience.CircuitBreakerOptions{
		Threshold:   1000,
		Timeout:     1 * time.Second,
		HalfOpenMax: 100,
	}
	cb := NewCircuitBreaker("bench-circuit", options)
	ctx := context.Background()
	testErr := errors.New("test error")

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		if i%5 == 0 {
			_, _ = cb.Execute(ctx, func(ctx context.Context) (any, error) {
				return nil, testErr
			})
		} else {
			_, _ = cb.Execute(ctx, func(ctx context.Context) (any, error) {
				return "success", nil
			})
		}
	}
}

func BenchmarkCircuitBreaker_StateTransitions(b *testing.B) {
	b.Run("Open-Close-Cycle", func(b *testing.B) {
		options := resilience.CircuitBreakerOptions{
			Threshold:   5,
			Timeout:     10 * time.Millisecond,
			HalfOpenMax: 2,
		}

		for i := 0; i < b.N; i++ {
			cb := NewCircuitBreaker("bench-circuit", options)
			ctx := context.Background()

			// Cause failures to open the circuit
			for j := 0; j < 5; j++ {
				_, _ = cb.Execute(ctx, func(ctx context.Context) (any, error) {
					return nil, errors.New("error")
				})
			}

			// Manually set lastStateTime to simulate timeout
			cb.mutex.Lock()
			cb.lastStateTime = time.Now().Add(-20 * time.Millisecond)
			cb.mutex.Unlock()

			// Allow one request through in half-open state
			cb.Allow()

			// Success should close the circuit
			cb.Success()
		}
	})
}

func BenchmarkCircuitBreaker_Parallel(b *testing.B) {
	options := resilience.CircuitBreakerOptions{
		Threshold:   1000,
		Timeout:     1 * time.Second,
		HalfOpenMax: 100,
	}
	cb := NewCircuitBreaker("bench-circuit", options)
	ctx := context.Background()

	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			_, _ = cb.Execute(ctx, func(ctx context.Context) (any, error) {
				if time.Now().UnixNano()%5 == 0 {
					return nil, errors.New("error")
				}
				return "success", nil
			})
		}
	})
}

func BenchmarkCircuitBreaker_AllowUnderLoad(b *testing.B) {
	options := resilience.CircuitBreakerOptions{
		Threshold:   100,
		Timeout:     1 * time.Second,
		HalfOpenMax: 10,
	}
	cb := NewCircuitBreaker("bench-circuit", options)

	// Create some contention by running multiple goroutines
	done := make(chan struct{})
	defer close(done)

	for i := 0; i < 4; i++ {
		go func() {
			for {
				select {
				case <-done:
					return
				default:
					cb.Allow()
					cb.Success()
				}
			}
		}()
	}

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		cb.Allow()
	}
}

func BenchmarkCircuitBreaker_StateTransitionOverhead(b *testing.B) {
	options := resilience.CircuitBreakerOptions{
		Threshold:   1,
		Timeout:     1 * time.Millisecond,
		HalfOpenMax: 1,
	}

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		cb := NewCircuitBreaker("bench-circuit", options)

		// Open the circuit
		cb.Failure()

		// Transition to half-open
		cb.mutex.Lock()
		cb.lastStateTime = time.Now().Add(-2 * time.Millisecond)
		cb.mutex.Unlock()
		cb.Allow()

		// Close the circuit
		cb.Success()
	}
}
