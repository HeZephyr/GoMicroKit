package ratelimit

import (
	"sync"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
)

// SlidingWindowRateLimiter implements the sliding window algorithm for rate limiting
type SlidingWindowRateLimiter struct {
	name     string
	rate     int           // requests per second
	window   time.Duration // window size
	requests []time.Time   // request timestamps
	mutex    sync.Mutex
}

// NewSlidingWindowRateLimiter creates a new sliding window rate limiter
func NewSlidingWindowRateLimiter(name string, options resilience.RateLimiterOptions) *SlidingWindowRateLimiter {
	if options.Rate <= 0 {
		options.Rate = 100 // Default: 100 requests per second
	}

	return &SlidingWindowRateLimiter{
		name:     name,
		rate:     options.Rate,
		window:   time.Second, // 1 second window
		requests: make([]time.Time, 0, options.Rate),
	}
}

// Name returns the rate limiter name
func (rl *SlidingWindowRateLimiter) Name() string {
	return rl.name
}

// Allow checks if a request is allowed under the rate limit
func (rl *SlidingWindowRateLimiter) Allow() bool {
	return rl.AllowN(1)
}

// AllowN checks if n requests are allowed under the rate limit
func (rl *SlidingWindowRateLimiter) AllowN(n int) bool {
	rl.mutex.Lock()
	defer rl.mutex.Unlock()

	now := time.Now()
	cutoff := now.Add(-rl.window)

	// Remove expired timestamps
	valid := 0
	for i, t := range rl.requests {
		if t.After(cutoff) {
			rl.requests[valid] = rl.requests[i]
			valid++
		}
	}
	rl.requests = rl.requests[:valid]

	// Check if adding n more requests would exceed the rate
	if len(rl.requests)+n > rl.rate {
		return false
	}

	// Add the new requests
	for i := 0; i < n; i++ {
		rl.requests = append(rl.requests, now)
	}

	return true
}

// Reset resets the rate limiter
func (rl *SlidingWindowRateLimiter) Reset() {
	rl.mutex.Lock()
	defer rl.mutex.Unlock()
	rl.requests = rl.requests[:0]
}
