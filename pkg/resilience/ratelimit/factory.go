package ratelimit

import (
	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
)

// Algorithm represents a rate limiting algorithm
type Algorithm string

const (
	// TokenBucket is the token bucket algorithm
	TokenBucket Algorithm = "token_bucket"
	// SlidingWindow is the sliding window algorithm
	SlidingWindow Algorithm = "sliding_window"
	// LeakyBucket is the leaky bucket algorithm
	LeakyBucket Algorithm = "leaky_bucket"
)

// NewRateLimiter creates a new rate limiter with the specified algorithm
func NewRateLimiter(name string, algorithm Algorithm, options resilience.RateLimiterOptions) resilience.RateLimiter {
	switch algorithm {
	case SlidingWindow:
		return NewSlidingWindowRateLimiter(name, options)
	case LeakyBucket:
		return NewLeakyBucketRateLimiter(name, options)
	case TokenBucket:
		fallthrough
	default:
		return NewTokenBucketRateLimiter(name, options)
	}
}
