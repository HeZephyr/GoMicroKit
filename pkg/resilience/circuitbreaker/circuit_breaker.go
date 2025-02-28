// pkg/resilience/circuitbreaker/circuit_breaker.go
package circuitbreaker

import (
	"context"
	"sync"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
)

// State represents the state of a circuit breaker
type State string

const (
	StateClosed   State = "closed"   // Circuit is closed and requests flow normally
	StateOpen     State = "open"     // Circuit is open and requests fail fast
	StateHalfOpen State = "halfOpen" // Circuit is half-open, allowing a limited number of requests
)

// DefaultOptions returns the default circuit breaker options
func DefaultOptions() resilience.CircuitBreakerOptions {
	return resilience.CircuitBreakerOptions{
		Threshold:   5,                // Number of failures before opening the circuit
		Timeout:     30 * time.Second, // How long to keep the circuit open
		HalfOpenMax: 3,                // Max requests allowed when half-open
	}
}

// CircuitBreaker implements the resilience.CircuitBreaker interface
type CircuitBreaker struct {
	name          string
	state         State
	failures      int
	halfOpenCount int
	lastStateTime time.Time
	mutex         sync.RWMutex
	options       resilience.CircuitBreakerOptions
}

// NewCircuitBreaker creates a new circuit breaker
func NewCircuitBreaker(name string, options resilience.CircuitBreakerOptions) *CircuitBreaker {
	if options.Threshold <= 0 {
		options.Threshold = DefaultOptions().Threshold
	}
	if options.Timeout <= 0 {
		options.Timeout = DefaultOptions().Timeout
	}
	if options.HalfOpenMax <= 0 {
		options.HalfOpenMax = DefaultOptions().HalfOpenMax
	}

	return &CircuitBreaker{
		name:          name,
		state:         StateClosed,
		lastStateTime: time.Now(),
		options:       options,
	}
}

// Name returns the circuit breaker name
func (cb *CircuitBreaker) Name() string {
	return cb.name
}

// Execute executes a function with circuit breaker protection
func (cb *CircuitBreaker) Execute(ctx context.Context, fn func(ctx context.Context) (any, error)) (any, error) {
	if !cb.Allow() {
		return nil, resilience.ErrCircuitOpen
	}

	result, err := fn(ctx)
	if err != nil {
		cb.Failure()
		return result, err
	}

	cb.Success()
	return result, nil
}

// Allow checks if a request is allowed to proceed
func (cb *CircuitBreaker) Allow() bool {
	cb.mutex.Lock()
	defer cb.mutex.Unlock()

	// If the circuit is open, check if the timeout has elapsed
	if cb.state == StateOpen {
		if time.Since(cb.lastStateTime) > cb.options.Timeout {
			cb.setState(StateHalfOpen)
			cb.halfOpenCount = 1 // Allow this request and count it
			return true
		}
		return false
	}

	// If the circuit is half-open, allow limited requests
	if cb.state == StateHalfOpen {
		if cb.halfOpenCount < cb.options.HalfOpenMax {
			cb.halfOpenCount++
			return true
		}
		return false
	}

	// Circuit is closed, allow the request
	return true
}

// Success reports a successful operation
func (cb *CircuitBreaker) Success() {
	cb.mutex.Lock()
	defer cb.mutex.Unlock()

	// In half-open state, success means we can close the circuit
	if cb.state == StateHalfOpen {
		cb.setState(StateClosed)
		cb.failures = 0
		cb.halfOpenCount = 0
	} else if cb.state == StateClosed {
		// In closed state, reset failures on success
		cb.failures = 0
	}
}

// Failure reports a failed operation
func (cb *CircuitBreaker) Failure() {
	cb.mutex.Lock()
	defer cb.mutex.Unlock()

	cb.failures++

	// In half-open state, any failure opens the circuit again
	if cb.state == StateHalfOpen {
		cb.setState(StateOpen)
		cb.halfOpenCount = 0
		return
	}

	// In closed state, check if we've reached the threshold
	if cb.state == StateClosed && cb.failures >= cb.options.Threshold {
		cb.setState(StateOpen)
	}
}

// setState changes the circuit breaker state
func (cb *CircuitBreaker) setState(newState State) {
	if cb.state == newState {
		return
	}

	oldState := cb.state
	cb.state = newState
	cb.lastStateTime = time.Now()

	// Notify state change if callback is provided
	if cb.options.OnStateChange != nil {
		go cb.options.OnStateChange(string(oldState), string(newState))
	}
}

// State returns the current state of the circuit breaker
func (cb *CircuitBreaker) State() State {
	cb.mutex.RLock()
	defer cb.mutex.RUnlock()
	return cb.state
}

// Reset resets the circuit breaker to its initial closed state
func (cb *CircuitBreaker) Reset() {
	cb.mutex.Lock()
	defer cb.mutex.Unlock()
	cb.setState(StateClosed)
	cb.failures = 0
	cb.halfOpenCount = 0
}
