package retry

import (
	"context"
	"crypto/rand"
	"encoding/binary"
	"math"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
)

// Retry implements the resilience.Retry interface
type Retry struct {
	name    string
	options resilience.RetryOptions
}

// NewRetry creates a new retry instance
func NewRetry(name string, options resilience.RetryOptions) *Retry {
	if options.Attempts <= 0 {
		options.Attempts = DefaultOptions().Attempts
	}
	if options.Delay <= 0 {
		options.Delay = DefaultOptions().Delay
	}
	if options.MaxDelay <= 0 {
		options.MaxDelay = DefaultOptions().MaxDelay
	}
	if options.BackoffFactor <= 0 {
		options.BackoffFactor = DefaultOptions().BackoffFactor
	}
	if options.RetryableFunc == nil {
		options.RetryableFunc = DefaultOptions().RetryableFunc
	}

	return &Retry{
		name:    name,
		options: options,
	}
}

// DefaultOptions returns the default retry options
func DefaultOptions() resilience.RetryOptions {
	return resilience.RetryOptions{
		Attempts:      3,
		Delay:         100 * time.Millisecond,
		MaxDelay:      10 * time.Second,
		BackoffFactor: 2.0,
		RetryableFunc: func(err error) bool { return err != nil },
	}
}

// Name returns the retry name
func (r *Retry) Name() string {
	return r.name
}

// Execute executes a function with retry logic
func (r *Retry) Execute(ctx context.Context, fn func(ctx context.Context) (any, error)) (any, error) {
	var result any
	var err error

	for attempt := 0; attempt < r.options.Attempts; attempt++ {
		// Execute the function
		result, err = fn(ctx)

		// If no error or error is not retryable, return immediately
		if err == nil || !r.options.RetryableFunc(err) {
			return result, err
		}

		// Last attempt, return the error
		if attempt == r.options.Attempts-1 {
			break
		}

		// Calculate backoff delay
		delay := r.calculateBackoff(attempt)

		// Wait for the backoff period or context cancellation
		select {
		case <-time.After(delay):
			// Continue to next attempt
		case <-ctx.Done():
			return nil, ctx.Err()
		}
	}

	return result, err
}

// secureRandomFloat64 generates a secure random float64 in the range [0, 1)
func secureRandomFloat64() (float64, error) {
	var buf [8]byte
	if _, err := rand.Read(buf[:]); err != nil {
		return 0, err
	}
	randomUint64 := binary.LittleEndian.Uint64(buf[:])
	return float64(randomUint64) / (math.MaxUint64), nil
}

// calculateBackoff calculates the backoff delay for a given attempt
func (r *Retry) calculateBackoff(attempt int) time.Duration {
	// Calculate exponential backoff
	backoff := float64(r.options.Delay) * math.Pow(r.options.BackoffFactor, float64(attempt))

	// Add jitter to prevent synchronized retries (thundering herd)
	jitterFactor, err := secureRandomFloat64()
	if err != nil {
		jitterFactor = 0.5 // Fallback to a fixed jitter factor
	}
	jitter := jitterFactor * 0.1 * backoff // 10% jitter
	backoff = backoff + jitter

	// Ensure backoff doesn't exceed max delay
	if backoff > float64(r.options.MaxDelay) {
		backoff = float64(r.options.MaxDelay)
	}

	return time.Duration(backoff)
}
