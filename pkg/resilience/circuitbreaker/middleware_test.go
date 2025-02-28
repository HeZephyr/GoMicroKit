package circuitbreaker

import (
	"context"
	"errors"
	"testing"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
	"github.com/HeZephyr/GoMicroKit/pkg/service"
)

func TestCircuitBreakerMiddleware(t *testing.T) {
	options := resilience.CircuitBreakerOptions{
		Threshold:   2,
		Timeout:     1 * time.Hour, // Long timeout to prevent auto transition
		HalfOpenMax: 1,
	}
	cb := NewCircuitBreaker("test-middleware", options)

	// Create a test handler that fails every time
	failingHandler := func(ctx context.Context, req any) (any, error) {
		return nil, errors.New("handler error")
	}

	// Apply circuit breaker middleware
	middleware := CircuitBreakerMiddleware(cb)
	handler := middleware(failingHandler)

	// First call - should fail but circuit remains closed
	_, err1 := handler(context.Background(), "request")
	if err1 == nil || err1.Error() != "handler error" {
		t.Errorf("expected 'handler error', got %v", err1)
	}

	// Second call - should fail and open the circuit
	_, err2 := handler(context.Background(), "request")
	if err2 == nil || err2.Error() != "handler error" {
		t.Errorf("expected 'handler error', got %v", err2)
	}

	// Third call - circuit should be open, handler should not be called
	_, err3 := handler(context.Background(), "request")
	if !errors.Is(err3, resilience.ErrCircuitOpen) {
		t.Errorf("expected ErrCircuitOpen, got %v", err3)
	}

	// Reset circuit and try with successful handler
	cb.Reset()

	successHandler := func(ctx context.Context, req any) (any, error) {
		return "success", nil
	}

	successMiddleware := middleware(successHandler)

	// Call should succeed
	result, err := successMiddleware(context.Background(), "request")
	if err != nil {
		t.Errorf("expected no error, got %v", err)
	}
	if result != "success" {
		t.Errorf("expected 'success', got %v", result)
	}
}

func TestCircuitBreakerWithServiceChain(t *testing.T) {
	options := resilience.CircuitBreakerOptions{
		Threshold:   2,
		Timeout:     1 * time.Hour, // Long timeout to prevent auto transition
		HalfOpenMax: 1,
	}
	cb := NewCircuitBreaker("test-chain", options)

	// Create test handlers
	var handlerCalled bool
	testHandler := func(ctx context.Context, req any) (any, error) {
		handlerCalled = true
		if req.(string) == "fail" {
			return nil, errors.New("handler error")
		}
		return "success", nil
	}

	// Create middleware chain
	middleware := CircuitBreakerMiddleware(cb)
	chain := service.Chain(middleware)
	handler := chain(testHandler)

	// Test with success
	handlerCalled = false
	result, err := handler(context.Background(), "success")
	if err != nil {
		t.Errorf("expected no error, got %v", err)
	}
	if result != "success" {
		t.Errorf("expected 'success', got %v", result)
	}
	if !handlerCalled {
		t.Error("handler was not called")
	}

	// Test with failures to open circuit
	handlerCalled = false
	_, _ = handler(context.Background(), "fail")
	if !handlerCalled {
		t.Error("handler was not called on first failure")
	}

	handlerCalled = false
	_, _ = handler(context.Background(), "fail")
	if !handlerCalled {
		t.Error("handler was not called on second failure")
	}

	// Circuit should be open now
	handlerCalled = false
	_, err = handler(context.Background(), "success")
	if !errors.Is(err, resilience.ErrCircuitOpen) {
		t.Errorf("expected ErrCircuitOpen, got %v", err)
	}
	if handlerCalled {
		t.Error("handler was called when circuit was open")
	}

	// Test half-open state
	cb.mutex.Lock()
	cb.lastStateTime = time.Now().Add(-2 * time.Hour) // Set to past to force timeout
	cb.mutex.Unlock()

	// First request in half-open state should be allowed
	handlerCalled = false
	_, _ = handler(context.Background(), "success")
	if !handlerCalled {
		t.Error("handler was not called in half-open state")
	}

	// Circuit should be closed again after success
	if cb.State() != StateClosed {
		t.Errorf("circuit should be closed after successful request in half-open state, got %s", cb.State())
	}
}

func TestCircuitBreakerTimeoutTransition(t *testing.T) {
	options := resilience.CircuitBreakerOptions{
		Threshold:   1,
		Timeout:     50 * time.Millisecond,
		HalfOpenMax: 1,
	}
	cb := NewCircuitBreaker("test-timeout", options)

	// Open the circuit
	cb.Failure()
	if cb.State() != StateOpen {
		t.Fatalf("circuit should be open after failure")
	}

	// Manipulate the last state change time
	cb.mutex.Lock()
	cb.lastStateTime = time.Now().Add(-100 * time.Millisecond) // Set to past
	cb.mutex.Unlock()

	// Apply middleware
	middleware := CircuitBreakerMiddleware(cb)

	successHandler := func(ctx context.Context, req any) (any, error) {
		return "success", nil
	}

	handler := middleware(successHandler)

	// Call should succeed and transition circuit to half-open
	result, err := handler(context.Background(), "request")
	if err != nil {
		t.Errorf("expected no error after timeout, got %v", err)
	}
	if result != "success" {
		t.Errorf("expected 'success', got %v", result)
	}

	// Circuit should now be closed after successful request in half-open state
	if cb.State() != StateClosed {
		t.Errorf("circuit should be closed after successful request, got %s", cb.State())
	}
}
