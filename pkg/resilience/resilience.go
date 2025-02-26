// pkg/resilience/resilience.go
package resilience

import (
    "context"
    "time"
)

// CircuitBreaker implements the circuit breaker pattern
type CircuitBreaker interface {
    // Name returns the circuit breaker name
    Name() string
    
    // Execute executes a function with circuit breaker protection
    Execute(ctx context.Context, fn func(ctx context.Context) (interface{}, error)) (interface{}, error)
    
    // Allow checks if a request is allowed to proceed
    Allow() bool
    
    // Success reports a successful operation
    Success()
    
    // Failure reports a failed operation
    Failure()
}

// CircuitBreakerOptions contains options for circuit breakers
type CircuitBreakerOptions struct {
    Threshold      int
    Timeout        time.Duration
    HalfOpenMax    int
    OnStateChange  func(from, to string)
}

// RateLimiter implements rate limiting
type RateLimiter interface {
    // Name returns the rate limiter name
    Name() string
    
    // Allow checks if a request is allowed under the rate limit
    Allow() bool
    
    // AllowN checks if n requests are allowed under the rate limit
    AllowN(n int) bool
}

// RateLimiterOptions contains options for rate limiters
type RateLimiterOptions struct {
    Rate  int
    Burst int
}

// Retry implements retry logic
type Retry interface {
    // Name returns the retry name
    Name() string
    
    // Execute executes a function with retry logic
    Execute(ctx context.Context, fn func(ctx context.Context) (interface{}, error)) (interface{}, error)
}

// RetryOptions contains options for retry logic
type RetryOptions struct {
    Attempts      int
    Delay         time.Duration
    MaxDelay      time.Duration
    BackoffFactor float64
    RetryableFunc func(error) bool
}