package circuit

import (
	"context"
	"errors"
	"testing"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
)

func TestBreakerClosed(t *testing.T) {
	cb := NewBreaker("test", resilience.CircuitBreakerOptions{
		Threshold:   5,
		Timeout:     time.Second,
		HalfOpenMax: 2,
	})

	breaker := cb.(*Breaker)

	// Circuit should start closed
	if breaker.State() != StateClosed {
		t.Errorf("Expected initial state to be closed, got %v", breaker.State())
	}

	// Successful executions should keep it closed
	for i := 0; i < 10; i++ {
		result, err := cb.Execute(context.Background(), func(ctx context.Context) (any, error) {
			return "success", nil
		})

		if err != nil {
			t.Errorf("Expected no error, got %v", err)
		}

		if result != "success" {
			t.Errorf("Expected 'success', got %v", result)
		}

		if breaker.State() != StateClosed {
			t.Errorf("Expected state to remain closed, got %v", breaker.State())
		}
	}
}

func TestBreakerTripping(t *testing.T) {
	stateChanges := make([]string, 0)
	cb := NewBreaker("test", resilience.CircuitBreakerOptions{
		Threshold:   3,
		Timeout:     time.Second,
		HalfOpenMax: 2,
		OnStateChange: func(from, to string) {
			stateChanges = append(stateChanges, from+"->"+to)
		},
	})

	breaker := cb.(*Breaker)

	// Cause failures to trip the breaker
	for i := 0; i < 3; i++ {
		_, err := cb.Execute(context.Background(), func(ctx context.Context) (any, error) {
			return nil, errors.New("service error")
		})

		if err == nil || err.Error() != "service error" {
			t.Errorf("Expected 'service error', got %v", err)
		}
	}

	// Circuit should be open now
	if breaker.State() != StateOpen {
		t.Errorf("Expected state to be open after failures, got %v", breaker.State())
	}

	// Requests should be rejected with ErrCircuitOpen
	_, err := cb.Execute(context.Background(), func(ctx context.Context) (any, error) {
		return "success", nil
	})

	if !errors.Is(err, ErrCircuitOpen) {
		t.Errorf("Expected ErrCircuitOpen, got %v", err)
	}

	// Verify state change callback was called
	if len(stateChanges) != 1 || stateChanges[0] != "closed->open" {
		t.Errorf("Expected state change from closed to open, got %v", stateChanges)
	}
}

func TestBreakerHalfOpen(t *testing.T) {
	cb := NewBreaker("test", resilience.CircuitBreakerOptions{
		Threshold:   3,
		Timeout:     50 * time.Millisecond, // Short timeout for testing
		HalfOpenMax: 2,
	})

	breaker := cb.(*Breaker)

	// 直接修改状态以避免锁问题
	breaker.mutex.Lock()
	for i := 0; i < 3; i++ {
		breaker.consecutiveFailures++
	}
	breaker.toOpen()
	breaker.mutex.Unlock()

	// Wait for timeout
	time.Sleep(100 * time.Millisecond)

	// Circuit should allow one request (half-open)
	if !cb.Allow() {
		t.Error("Expected circuit to allow request in half-open state")
	}

	breaker.mutex.RLock()
	state := breaker.state
	breaker.mutex.RUnlock()

	if state != StateHalfOpen {
		t.Errorf("Expected state to be half-open, got %v", state)
	}

	// First success in half-open
	cb.Success()

	// Should still be half-open after first success
	breaker.mutex.RLock()
	state = breaker.state
	breaker.mutex.RUnlock()

	if state != StateHalfOpen {
		t.Errorf("Expected state to remain half-open after first success, got %v", state)
	}

	// Second success should close the circuit
	cb.Success()

	// Circuit should be closed now
	breaker.mutex.RLock()
	state = breaker.state
	breaker.mutex.RUnlock()

	if state != StateClosed {
		t.Errorf("Expected state to be closed after HalfOpenMax successes, got %v", state)
	}
}

func TestBreakerReopenOnFailure(t *testing.T) {
	cb := NewBreaker("test", resilience.CircuitBreakerOptions{
		Threshold:   3,
		Timeout:     50 * time.Millisecond,
		HalfOpenMax: 2,
	})

	breaker := cb.(*Breaker)

	// Cause failures to trip the breaker
	for i := 0; i < 3; i++ {
		cb.Failure()
	}

	// Wait for timeout
	time.Sleep(100 * time.Millisecond)

	// Should be half-open and allow a request
	if !cb.Allow() {
		t.Error("Expected circuit to allow request in half-open state")
	}

	// Failure in half-open state
	cb.Failure()

	// Circuit should be open again
	if breaker.State() != StateOpen {
		t.Errorf("Expected state to be open after failure in half-open, got %v", breaker.State())
	}

	// Request should be rejected
	if cb.Allow() {
		t.Error("Expected circuit to reject request after reopening")
	}
}
