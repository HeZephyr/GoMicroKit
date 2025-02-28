package ratelimit

import (
	"testing"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
)

func TestLeakyBucketRateLimiter_Name(t *testing.T) {
	rl := NewLeakyBucketRateLimiter("test-limiter", resilience.RateLimiterOptions{})
	if rl.Name() != "test-limiter" {
		t.Errorf("expected name 'test-limiter', got '%s'", rl.Name())
	}
}

func TestLeakyBucketRateLimiter_DefaultOptions(t *testing.T) {
	// Test with zero values - should use defaults
	rl := NewLeakyBucketRateLimiter("test-limiter", resilience.RateLimiterOptions{})

	// Check internal state
	rl.mutex.Lock()
	defer rl.mutex.Unlock()

	if rl.rate != 100 {
		t.Errorf("expected default rate 100, got %f", rl.rate)
	}

	if rl.capacity != 100 {
		t.Errorf("expected default capacity 100, got %d", rl.capacity)
	}

	if rl.water != 0 {
		t.Errorf("expected initial water 0, got %f", rl.water)
	}
}

func TestLeakyBucketRateLimiter_Allow(t *testing.T) {
	// Create a rate limiter with 10 requests per second and capacity of 5
	options := resilience.RateLimiterOptions{
		Rate:  10,
		Burst: 5, // Used as capacity in leaky bucket
	}
	rl := NewLeakyBucketRateLimiter("test-limiter", options)

	// Should allow up to capacity requests immediately
	for i := 0; i < options.Burst; i++ {
		if !rl.Allow() {
			t.Errorf("expected request %d to be allowed", i+1)
		}
	}

	// Next request should be rejected (bucket is full)
	if rl.Allow() {
		t.Error("expected request to be rejected when bucket is full")
	}

	// Simulate water leaking out
	rl.mutex.Lock()
	rl.lastLeakTime = time.Now().Add(-500 * time.Millisecond) // 0.5 seconds ago
	rl.mutex.Unlock()

	// Should allow some requests now (10 req/sec * 0.5 sec = 5 leaked out)
	// But since we already had 5 in the bucket, we can only add 5 more
	for i := 0; i < 5; i++ {
		if !rl.Allow() {
			t.Errorf("expected request %d to be allowed after leak", i+1)
		}
	}

	// Next request should be rejected again
	if rl.Allow() {
		t.Error("expected request to be rejected after bucket is full again")
	}
}

func TestLeakyBucketRateLimiter_AllowN(t *testing.T) {
	options := resilience.RateLimiterOptions{
		Rate:  100,
		Burst: 20, // Used as capacity in leaky bucket
	}
	rl := NewLeakyBucketRateLimiter("test-limiter", options)

	// Should allow a batch of 10
	if !rl.AllowN(10) {
		t.Error("expected batch of 10 to be allowed")
	}

	// Should allow another batch of 10
	if !rl.AllowN(10) {
		t.Error("expected second batch of 10 to be allowed")
	}

	// Should reject a batch of 10 (exceeds capacity)
	if rl.AllowN(10) {
		t.Error("expected third batch to be rejected")
	}

	// Should reject a batch of 1 (bucket is full)
	if rl.AllowN(1) {
		t.Error("expected batch of 1 to be rejected when bucket is full")
	}

	// Simulate water leaking out
	rl.mutex.Lock()
	rl.lastLeakTime = time.Now().Add(-200 * time.Millisecond) // 0.2 seconds ago
	rl.mutex.Unlock()

	// Should have leaked 100 req/s * 0.2s = 20 requests
	// But we only had 20 in the bucket, so it should be empty now
	// Should allow a batch of 20
	if !rl.AllowN(20) {
		t.Error("expected batch of 20 to be allowed after leak")
	}

	// Should reject a batch of 1 (bucket is full again)
	if rl.AllowN(1) {
		t.Error("expected batch of 1 to be rejected after bucket is full again")
	}
}

func TestLeakyBucketRateLimiter_Reset(t *testing.T) {
	options := resilience.RateLimiterOptions{
		Rate:  10,
		Burst: 5,
	}
	rl := NewLeakyBucketRateLimiter("test-limiter", options)

	// Fill the bucket
	for i := 0; i < options.Burst; i++ {
		rl.Allow()
	}

	// Next request should be rejected
	if rl.Allow() {
		t.Error("expected request to be rejected when bucket is full")
	}

	// Reset the limiter
	rl.Reset()

	// Check internal state
	rl.mutex.Lock()
	if rl.water != 0 {
		t.Errorf("expected water to be 0 after reset, got %f", rl.water)
	}
	rl.mutex.Unlock()

	// Should allow capacity requests again
	for i := 0; i < options.Burst; i++ {
		if !rl.Allow() {
			t.Errorf("expected request %d to be allowed after reset", i+1)
		}
	}
}

func TestLeakyBucketRateLimiter_WaterLevel(t *testing.T) {
	options := resilience.RateLimiterOptions{
		Rate:  10,
		Burst: 10,
	}
	rl := NewLeakyBucketRateLimiter("test-limiter", options)

	// Add 5 requests to the bucket
	for i := 0; i < 5; i++ {
		rl.Allow()
	}

	// Check water level
	rl.mutex.Lock()
	waterLevel := rl.water
	rl.mutex.Unlock()

	// Use epsilon for floating point comparison
	const epsilon = 0.0001
	if waterLevel < 5.0-epsilon || waterLevel > 5.0+epsilon {
		t.Errorf("expected water level around 5.0, got %f", waterLevel)
	}

	// Simulate partial leak
	rl.mutex.Lock()
	rl.lastLeakTime = time.Now().Add(-300 * time.Millisecond) // 0.3 seconds ago
	rl.mutex.Unlock()

	// Allow one more request to trigger leak calculation
	rl.Allow()

	// Check water level after leak
	// Should have leaked 10 req/s * 0.3s = 3 requests
	// 5 - 3 + 1 (new request) = 3
	rl.mutex.Lock()
	waterLevel = rl.water
	rl.mutex.Unlock()

	// Use epsilon for floating point comparison
	expectedLevel := 3.0
	if waterLevel < expectedLevel-epsilon || waterLevel > expectedLevel+epsilon {
		t.Errorf("expected water level around %.1f, got %f", expectedLevel, waterLevel)
	}
}

func TestLeakyBucketRateLimiter_CompleteLeakage(t *testing.T) {
	options := resilience.RateLimiterOptions{
		Rate:  10,
		Burst: 10,
	}
	rl := NewLeakyBucketRateLimiter("test-limiter", options)

	// Fill the bucket completely
	for i := 0; i < 10; i++ {
		rl.Allow()
	}

	// Simulate complete leakage (more time than needed to empty the bucket)
	rl.mutex.Lock()
	rl.lastLeakTime = time.Now().Add(-2 * time.Second) // 2 seconds ago
	rl.mutex.Unlock()

	// Allow a request to trigger leak calculation
	rl.Allow()

	// Check water level after leak
	// Should have leaked everything and have only the new request
	rl.mutex.Lock()
	if rl.water != 1 {
		t.Errorf("expected water level 1, got %f", rl.water)
	}
	rl.mutex.Unlock()
}
