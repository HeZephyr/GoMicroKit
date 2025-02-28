package ratelimit

import (
	"sync"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
)

// TokenBucketRateLimiter implements the token bucket algorithm for rate limiting
type TokenBucketRateLimiter struct {
	name       string
	rate       float64   // tokens per second
	burst      int       // maximum bucket size
	tokens     float64   // current number of tokens
	lastRefill time.Time // last time tokens were refilled
	mutex      sync.Mutex
}

// NewTokenBucketRateLimiter creates a new token bucket rate limiter
func NewTokenBucketRateLimiter(name string, options resilience.RateLimiterOptions) *TokenBucketRateLimiter {
	if options.Rate <= 0 {
		options.Rate = 100 // Default: 100 requests per second
	}
	if options.Burst <= 0 {
		options.Burst = options.Rate // Default: burst equals rate
	}

	return &TokenBucketRateLimiter{
		name:       name,
		rate:       float64(options.Rate),
		burst:      options.Burst,
		tokens:     float64(options.Burst), // Start with a full bucket
		lastRefill: time.Now(),
	}
}

// Name returns the rate limiter name
func (rl *TokenBucketRateLimiter) Name() string {
	return rl.name
}

// Allow checks if a request is allowed under the rate limit
func (rl *TokenBucketRateLimiter) Allow() bool {
	return rl.AllowN(1)
}

// AllowN checks if n requests are allowed under the rate limit
func (rl *TokenBucketRateLimiter) AllowN(n int) bool {
	rl.mutex.Lock()
	defer rl.mutex.Unlock()

	// Calculate time since last refill
	now := time.Now()
	elapsed := now.Sub(rl.lastRefill).Seconds()

	// Refill tokens based on elapsed time and rate
	rl.tokens += elapsed * rl.rate

	// Cap tokens at burst size
	if rl.tokens > float64(rl.burst) {
		rl.tokens = float64(rl.burst)
	}

	// Update last refill time
	rl.lastRefill = now

	// Check if we have enough tokens
	if rl.tokens >= float64(n) {
		// Consume tokens
		rl.tokens -= float64(n)
		return true
	}

	return false
}

// Reset resets the rate limiter to its initial state
func (rl *TokenBucketRateLimiter) Reset() {
	rl.mutex.Lock()
	defer rl.mutex.Unlock()
	rl.tokens = float64(rl.burst)
	rl.lastRefill = time.Now()
}
