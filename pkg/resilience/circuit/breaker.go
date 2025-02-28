package circuit

import (
	"context"
	"errors"
	"sync"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
)

// State represents the state of the circuit breaker
type State string

const (
	// StateClosed means the circuit breaker is closed and allowing requests
	StateClosed State = "closed"
	// StateOpen means the circuit breaker is open and blocking requests
	StateOpen State = "open"
	// StateHalfOpen means the circuit breaker is half-open and allowing test requests
	StateHalfOpen State = "half-open"
)

var (
	// ErrCircuitOpen is returned when the circuit breaker is open
	ErrCircuitOpen = errors.New("circuit breaker is open")
)

// Breaker implements the CircuitBreaker interface
type Breaker struct {
	name    string
	options resilience.CircuitBreakerOptions

	mutex  sync.RWMutex
	state  State
	expiry time.Time

	consecutiveFailures  int
	consecutiveSuccesses int
	totalRequests        int
	totalFailures        int
}

// NewBreaker creates a new circuit breaker
func NewBreaker(name string, options resilience.CircuitBreakerOptions) resilience.CircuitBreaker {
	// Set default values if not provided
	if options.Threshold <= 0 {
		options.Threshold = 5
	}
	if options.Timeout <= 0 {
		options.Timeout = 10 * time.Second
	}
	if options.HalfOpenMax <= 0 {
		options.HalfOpenMax = 1
	}

	return &Breaker{
		name:    name,
		options: options,
		state:   StateClosed,
	}
}

// Name returns the circuit breaker name
func (b *Breaker) Name() string {
	return b.name
}

// Execute executes a function with circuit breaker protection
func (b *Breaker) Execute(ctx context.Context, fn func(ctx context.Context) (any, error)) (any, error) {
	if !b.Allow() {
		return nil, ErrCircuitOpen
	}

	result, err := fn(ctx)
	if err != nil {
		b.Failure()
		return result, err
	}

	b.Success()
	return result, nil
}

// Allow checks if a request is allowed to proceed
func (b *Breaker) Allow() bool {
	b.mutex.RLock()

	now := time.Now()

	switch b.state {
	case StateClosed:
		b.mutex.RUnlock()
		return true
	case StateOpen:
		// Check if the timeout has expired
		if now.After(b.expiry) {
			// 释放读锁，获取写锁
			b.mutex.RUnlock()

			// 获取写锁进行状态转换
			b.mutex.Lock()
			defer b.mutex.Unlock()

			// Double check in case another goroutine changed the state
			if b.state == StateOpen && now.After(b.expiry) {
				b.toHalfOpen()
				return true
			}
			return false
		}
		b.mutex.RUnlock()
		return false
	case StateHalfOpen:
		result := b.consecutiveSuccesses < b.options.HalfOpenMax
		b.mutex.RUnlock()
		return result
	default:
		b.mutex.RUnlock()
		return false
	}
}

// Success reports a successful operation
func (b *Breaker) Success() {
	b.mutex.Lock()
	defer b.mutex.Unlock()

	b.consecutiveFailures = 0
	b.consecutiveSuccesses++
	b.totalRequests++

	// If we're half-open and have enough consecutive successes, close the circuit
	if b.state == StateHalfOpen && b.consecutiveSuccesses >= b.options.HalfOpenMax {
		b.toClosed()
	}
}

// Failure reports a failed operation
func (b *Breaker) Failure() {
	b.mutex.Lock()
	defer b.mutex.Unlock()

	b.consecutiveFailures++
	b.consecutiveSuccesses = 0
	b.totalRequests++
	b.totalFailures++

	// If we're closed and failures exceed threshold, open the circuit
	if b.state == StateClosed && b.consecutiveFailures >= b.options.Threshold {
		b.toOpen()
	} else if b.state == StateHalfOpen {
		// If we're half-open and have a failure, reopen the circuit
		b.toOpen()
	}
}

// toClosed changes the state to closed
func (b *Breaker) toClosed() {
	prevState := b.state
	b.state = StateClosed
	b.consecutiveFailures = 0
	b.consecutiveSuccesses = 0

	if b.options.OnStateChange != nil {
		b.options.OnStateChange(string(prevState), string(b.state))
	}
}

// toOpen changes the state to open
func (b *Breaker) toOpen() {
	prevState := b.state
	b.state = StateOpen
	b.expiry = time.Now().Add(b.options.Timeout)

	if b.options.OnStateChange != nil {
		b.options.OnStateChange(string(prevState), string(b.state))
	}
}

// toHalfOpen changes the state to half-open
func (b *Breaker) toHalfOpen() {
	prevState := b.state
	b.state = StateHalfOpen
	b.consecutiveSuccesses = 0

	if b.options.OnStateChange != nil {
		b.options.OnStateChange(string(prevState), string(b.state))
	}
}

// State returns the current state of the circuit breaker (for testing)
func (b *Breaker) State() State {
	b.mutex.RLock()
	defer b.mutex.RUnlock()
	return b.state
}

// Reset resets the circuit breaker to its initial closed state
func (b *Breaker) Reset() {
	b.mutex.Lock()
	defer b.mutex.Unlock()

	prevState := b.state
	b.state = StateClosed
	b.consecutiveFailures = 0
	b.consecutiveSuccesses = 0
	b.totalRequests = 0
	b.totalFailures = 0

	if b.options.OnStateChange != nil {
		b.options.OnStateChange(string(prevState), string(StateClosed))
	}
}
