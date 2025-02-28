package ratelimit

import (
	"sync"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
)

// LeakyBucketRateLimiter implements the leaky bucket algorithm for rate limiting
type LeakyBucketRateLimiter struct {
	name         string
	rate         float64   // tokens per second (outflow rate)
	capacity     int       // maximum bucket size
	water        float64   // current amount of water (requests) in the bucket
	lastLeakTime time.Time // last time water leaked from the bucket
	mutex        sync.Mutex
}

// NewLeakyBucketRateLimiter creates a new leaky bucket rate limiter
func NewLeakyBucketRateLimiter(name string, options resilience.RateLimiterOptions) *LeakyBucketRateLimiter {
	if options.Rate <= 0 {
		options.Rate = 100 // Default: 100 requests per second
	}
	if options.Burst <= 0 {
		options.Burst = options.Rate // Default: burst equals rate
	}

	return &LeakyBucketRateLimiter{
		name:         name,
		rate:         float64(options.Rate),
		capacity:     options.Burst,
		water:        0, // Start with an empty bucket
		lastLeakTime: time.Now(),
	}
}

// Name returns the rate limiter name
func (rl *LeakyBucketRateLimiter) Name() string {
	return rl.name
}

// Allow checks if a request is allowed under the rate limit
func (rl *LeakyBucketRateLimiter) Allow() bool {
	return rl.AllowN(1)
}

// AllowN checks if n requests are allowed under the rate limit
func (rl *LeakyBucketRateLimiter) AllowN(n int) bool {
	rl.mutex.Lock()
	defer rl.mutex.Unlock()

	// Calculate time since last leak
	now := time.Now()
	elapsed := now.Sub(rl.lastLeakTime).Seconds()

	// Calculate how much water leaked out since last check
	leaked := elapsed * rl.rate

	// Update water level, ensuring it doesn't go below 0
	rl.water -= leaked
	if rl.water < 0 {
		rl.water = 0
	}

	// Update last leak time
	rl.lastLeakTime = now

	// Check if adding n would exceed capacity
	if rl.water+float64(n) > float64(rl.capacity) {
		return false
	}

	// Add water (requests) to the bucket
	rl.water += float64(n)
	return true
}

// Reset resets the rate limiter to its initial state
func (rl *LeakyBucketRateLimiter) Reset() {
	rl.mutex.Lock()
	defer rl.mutex.Unlock()
	rl.water = 0
	rl.lastLeakTime = time.Now()
}
