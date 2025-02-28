package circuitbreaker

import (
	"context"
	"errors"
	"sync"
	"testing"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
)

func TestCircuitBreaker_Name(t *testing.T) {
	cb := NewCircuitBreaker("test-circuit", DefaultOptions())
	if cb.Name() != "test-circuit" {
		t.Errorf("expected name 'test-circuit', got '%s'", cb.Name())
	}
}

func TestCircuitBreaker_States(t *testing.T) {
	// Create a circuit breaker with a low threshold
	options := resilience.CircuitBreakerOptions{
		Threshold:   2,
		Timeout:     50 * time.Millisecond,
		HalfOpenMax: 1,
	}
	cb := NewCircuitBreaker("test-circuit", options)

	// Initially the circuit should be closed
	if cb.State() != StateClosed {
		t.Errorf("expected initial state to be Closed, got %s", cb.State())
	}

	// Simulate failures to open the circuit
	cb.Failure()
	if cb.State() != StateClosed {
		t.Errorf("expected state to be Closed after 1 failure, got %s", cb.State())
	}

	cb.Failure()
	if cb.State() != StateOpen {
		t.Errorf("expected state to be Open after 2 failures, got %s", cb.State())
	}

	// Check that requests are rejected when circuit is open
	if cb.Allow() {
		t.Error("expected request to be rejected when circuit is open")
	}

	// Manually set lastStateTime to simulate timeout expiration
	cb.mutex.Lock()
	cb.lastStateTime = time.Now().Add(-100 * time.Millisecond) // Set to past
	cb.state = StateOpen                                       // Ensure we're in open state
	cb.mutex.Unlock()

	// Now the circuit should allow one request and transition to half-open
	if !cb.Allow() {
		t.Error("expected request to be allowed after timeout")
	}

	if cb.State() != StateHalfOpen {
		t.Errorf("expected state to be HalfOpen after timeout, got %s", cb.State())
	}

	// Additional requests should be rejected in half-open state
	if cb.Allow() {
		t.Error("expected additional request to be rejected in half-open state")
	}

	// Simulate success to close the circuit
	cb.Success()
	if cb.State() != StateClosed {
		t.Errorf("expected state to be Closed after success in half-open state, got %s", cb.State())
	}

	// Requests should be allowed again
	if !cb.Allow() {
		t.Error("expected request to be allowed when circuit is closed again")
	}
}

func TestCircuitBreaker_Execute(t *testing.T) {
	options := resilience.CircuitBreakerOptions{
		Threshold:   2,
		Timeout:     50 * time.Millisecond,
		HalfOpenMax: 1,
	}
	cb := NewCircuitBreaker("test-circuit", options)

	// Test successful execution
	result, err := cb.Execute(context.Background(), func(ctx context.Context) (any, error) {
		return "success", nil
	})

	if err != nil {
		t.Errorf("expected no error, got %v", err)
	}
	if result != "success" {
		t.Errorf("expected result 'success', got %v", result)
	}

	// Test failed execution
	testErr := errors.New("test error")
	_, err = cb.Execute(context.Background(), func(ctx context.Context) (any, error) {
		return nil, testErr
	})

	if err != testErr {
		t.Errorf("expected error %v, got %v", testErr, err)
	}

	// Cause circuit to open
	_, _ = cb.Execute(context.Background(), func(ctx context.Context) (any, error) {
		return nil, errors.New("another error")
	})

	// Verify circuit is open
	_, err = cb.Execute(context.Background(), func(ctx context.Context) (any, error) {
		return "should not execute", nil
	})

	if !errors.Is(err, ErrCircuitOpen) {
		t.Errorf("expected ErrCircuitOpen, got %v", err)
	}
}

func TestCircuitBreaker_Reset(t *testing.T) {
	options := resilience.CircuitBreakerOptions{
		Threshold:   1,
		Timeout:     1 * time.Hour, // Long timeout to ensure it doesn't transition automatically
		HalfOpenMax: 1,
	}
	cb := NewCircuitBreaker("test-circuit", options)

	// Open the circuit
	cb.Failure()
	if cb.State() != StateOpen {
		t.Errorf("expected state to be Open, got %s", cb.State())
	}

	// Reset the circuit
	cb.Reset()
	if cb.State() != StateClosed {
		t.Errorf("expected state to be Closed after reset, got %s", cb.State())
	}

	// Verify circuit allows requests after reset
	if !cb.Allow() {
		t.Error("expected circuit to allow requests after reset")
	}
}

func TestCircuitBreaker_StateChangeCallback(t *testing.T) {
	// Create a channel for synchronizing state changes
	changes := make(chan struct{}, 3)

	// Track state changes in order
	var stateChanges []string
	var mu sync.Mutex

	recordChange := func(from, to string) {
		mu.Lock()
		stateChanges = append(stateChanges, from+"->"+to)
		mu.Unlock()
		changes <- struct{}{}
	}

	options := resilience.CircuitBreakerOptions{
		Threshold:     1,
		Timeout:       10 * time.Millisecond,
		HalfOpenMax:   1,
		OnStateChange: recordChange,
	}

	// Create circuit breaker and set initial state
	cb := NewCircuitBreaker("test-circuit", options)

	// Directly call setState to trigger callbacks in a controlled way
	cb.setState(StateClosed) // Ensure we start in closed state

	// 1. Trigger closed -> open transition
	cb.setState(StateOpen)
	<-changes // Wait for callback to complete

	// 2. Trigger open -> half-open transition
	cb.setState(StateHalfOpen)
	<-changes // Wait for callback to complete

	// 3. Trigger half-open -> closed transition
	cb.setState(StateClosed)
	<-changes // Wait for callback to complete

	// Verify all state changes were recorded in the correct order
	mu.Lock()
	defer mu.Unlock()

	if len(stateChanges) != 3 {
		t.Errorf("expected 3 state changes, got %d: %v", len(stateChanges), stateChanges)
		return
	}

	expectedChanges := []string{
		"closed->open",
		"open->halfOpen",
		"halfOpen->closed",
	}

	for i, expected := range expectedChanges {
		if stateChanges[i] != expected {
			t.Errorf("at index %d: expected %s, got %s", i, expected, stateChanges[i])
		}
	}
}

func TestCircuitBreaker_Concurrency(t *testing.T) {
	options := resilience.CircuitBreakerOptions{
		Threshold:   100,
		Timeout:     50 * time.Millisecond,
		HalfOpenMax: 10,
	}
	cb := NewCircuitBreaker("test-circuit", options)

	// Run many concurrent operations
	var wg sync.WaitGroup
	for i := 0; i < 1000; i++ {
		wg.Add(1)
		go func(i int) {
			defer wg.Done()
			if i%3 == 0 {
				cb.Failure()
			} else {
				cb.Success()
			}
		}(i)
	}

	wg.Wait()
	// Circuit should remain closed as success > failures
	if cb.State() != StateClosed {
		t.Errorf("expected circuit to remain Closed under concurrent load, got %s", cb.State())
	}
}

func TestCircuitBreaker_HalfOpenBehavior(t *testing.T) {
	options := resilience.CircuitBreakerOptions{
		Threshold:   1,
		Timeout:     1 * time.Second,
		HalfOpenMax: 2, // Allow 2 requests in half-open state
	}
	cb := NewCircuitBreaker("test-circuit", options)

	// Set the circuit to half-open state directly
	cb.mutex.Lock()
	cb.state = StateHalfOpen
	cb.halfOpenCount = 0
	cb.mutex.Unlock()

	// First request should be allowed
	if !cb.Allow() {
		t.Error("first request should be allowed in half-open state")
	}

	// Second request should be allowed (since HalfOpenMax = 2)
	if !cb.Allow() {
		t.Error("second request should be allowed in half-open state")
	}

	// Third request should be rejected
	if cb.Allow() {
		t.Error("third request should be rejected in half-open state")
	}

	// Successful request should close the circuit
	cb.Success()
	if cb.State() != StateClosed {
		t.Errorf("circuit should be closed after success, got %s", cb.State())
	}

	// All requests should be allowed now
	if !cb.Allow() {
		t.Error("request should be allowed in closed state")
	}
}

func TestCircuitBreaker_StateTransitions(t *testing.T) {
	cb := NewCircuitBreaker("test-circuit", DefaultOptions())

	// Test all state transitions
	transitions := []struct {
		from, to State
		expected State // 期望的最终状态
	}{
		{StateClosed, StateOpen, StateOpen},
		{StateOpen, StateHalfOpen, StateHalfOpen},
		{StateHalfOpen, StateClosed, StateClosed},
		{StateHalfOpen, StateOpen, StateOpen},
		{StateClosed, StateHalfOpen, StateHalfOpen}, // 直接转换也是允许的
		{StateOpen, StateClosed, StateClosed},       // 直接转换也是允许的
	}

	for _, tr := range transitions {
		t.Run(string(tr.from)+"->"+string(tr.to), func(t *testing.T) {
			// Set initial state
			cb.mutex.Lock()
			cb.state = tr.from
			cb.mutex.Unlock()

			// Perform transition
			cb.setState(tr.to)

			// Check result
			currentState := cb.State()
			if currentState != tr.expected {
				t.Errorf("transition from %s to %s: expected final state %s, got %s",
					tr.from, tr.to, tr.expected, currentState)
			}
		})
	}
}
