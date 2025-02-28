package resilience

import (
	"errors"
)

// Common errors returned by resilience components
var (
	// ErrCircuitOpen is returned when a request is rejected due to an open circuit breaker
	ErrCircuitOpen = errors.New("circuit breaker is open")

	// ErrRateLimited is returned when a request is rejected due to rate limiting
	ErrRateLimited = errors.New("rate limit exceeded")

	// ErrTimeout is returned when a request times out
	ErrTimeout = errors.New("request timed out")
)
