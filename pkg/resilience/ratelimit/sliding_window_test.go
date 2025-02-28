package ratelimit

import (
	"testing"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
)

func TestSlidingWindowRateLimiter_Name(t *testing.T) {
	rl := NewSlidingWindowRateLimiter("test-limiter", resilience.RateLimiterOptions{})
	if rl.Name() != "test-limiter" {
		t.Errorf("expected name 'test-limiter', got '%s'", rl.Name())
	}
}

func TestSlidingWindowRateLimiter_DefaultOptions(t *testing.T) {
	// Test with zero values - should use defaults
	rl := NewSlidingWindowRateLimiter("test-limiter", resilience.RateLimiterOptions{})

	// Check internal state
	rl.mutex.Lock()
	defer rl.mutex.Unlock()

	if rl.rate != 100 {
		t.Errorf("expected default rate 100, got %d", rl.rate)
	}

	if len(rl.requests) != 0 {
		t.Errorf("expected initial requests to be empty, got %d items", len(rl.requests))
	}
}

func TestSlidingWindowRateLimiter_Allow(t *testing.T) {
	// Create a rate limiter with 10 requests per second
	options := resilience.RateLimiterOptions{
		Rate: 10,
	}
	rl := NewSlidingWindowRateLimiter("test-limiter", options)

	// Should allow up to rate requests immediately
	for i := 0; i < options.Rate; i++ {
		if !rl.Allow() {
			t.Errorf("expected request %d to be allowed", i+1)
		}
	}

	// Next request should be rejected (window is full)
	if rl.Allow() {
		t.Error("expected request to be rejected when window is full")
	}

	// Simulate time passing by aging some requests
	now := time.Now()
	rl.mutex.Lock()
	// Set half of the requests to be outside the window
	for i := 0; i < options.Rate/2; i++ {
		rl.requests[i] = now.Add(-2 * time.Second) // 2 seconds ago (outside the window)
	}
	rl.mutex.Unlock()

	// Should allow half of the rate again
	for i := 0; i < options.Rate/2; i++ {
		if !rl.Allow() {
			t.Errorf("expected request %d to be allowed after aging", i+1)
		}
	}

	// Next request should be rejected again
	if rl.Allow() {
		t.Error("expected request to be rejected after window is full again")
	}
}

func TestSlidingWindowRateLimiter_AllowN(t *testing.T) {
	options := resilience.RateLimiterOptions{
		Rate: 20,
	}
	rl := NewSlidingWindowRateLimiter("test-limiter", options)

	// Should allow a batch of 10
	if !rl.AllowN(10) {
		t.Error("expected batch of 10 to be allowed")
	}

	// Should allow another batch of 10
	if !rl.AllowN(10) {
		t.Error("expected second batch of 10 to be allowed")
	}

	// Should reject a batch of 10 (exceeds rate)
	if rl.AllowN(10) {
		t.Error("expected third batch to be rejected")
	}

	// Should reject a batch of 1 (window is full)
	if rl.AllowN(1) {
		t.Error("expected batch of 1 to be rejected when window is full")
	}

	// Simulate time passing by aging all requests
	now := time.Now()
	rl.mutex.Lock()
	for i := range rl.requests {
		rl.requests[i] = now.Add(-2 * time.Second) // 2 seconds ago (outside the window)
	}
	rl.mutex.Unlock()

	// Should allow a batch of 20 again
	if !rl.AllowN(20) {
		t.Error("expected batch of 20 to be allowed after aging")
	}

	// Should reject a batch of 1 (window is full again)
	if rl.AllowN(1) {
		t.Error("expected batch of 1 to be rejected after window is full again")
	}
}

func TestSlidingWindowRateLimiter_Reset(t *testing.T) {
	options := resilience.RateLimiterOptions{
		Rate: 10,
	}
	rl := NewSlidingWindowRateLimiter("test-limiter", options)

	// Fill the window
	for i := 0; i < options.Rate; i++ {
		rl.Allow()
	}

	// Next request should be rejected
	if rl.Allow() {
		t.Error("expected request to be rejected when window is full")
	}

	// Reset the limiter
	rl.Reset()

	// Check internal state
	rl.mutex.Lock()
	if len(rl.requests) != 0 {
		t.Errorf("expected requests to be empty after reset, got %d items", len(rl.requests))
	}
	rl.mutex.Unlock()

	// Should allow rate requests again
	for i := 0; i < options.Rate; i++ {
		if !rl.Allow() {
			t.Errorf("expected request %d to be allowed after reset", i+1)
		}
	}
}

func TestSlidingWindowRateLimiter_WindowCleanup(t *testing.T) {
	options := resilience.RateLimiterOptions{
		Rate: 10,
	}
	rl := NewSlidingWindowRateLimiter("test-limiter", options)

	// Add 10 requests
	for i := 0; i < 10; i++ {
		rl.Allow()
	}

	// Check window size
	rl.mutex.Lock()
	if len(rl.requests) != 10 {
		t.Errorf("expected window size 10, got %d", len(rl.requests))
	}
	rl.mutex.Unlock()

	// Age half of the requests
	now := time.Now()
	rl.mutex.Lock()
	for i := 0; i < 5; i++ {
		rl.requests[i] = now.Add(-2 * time.Second) // 2 seconds ago (outside the window)
	}
	rl.mutex.Unlock()

	// Trigger cleanup by allowing a new request
	rl.Allow()

	// Check window size after cleanup
	rl.mutex.Lock()
	if len(rl.requests) != 6 { // 5 remaining + 1 new
		t.Errorf("expected window size 6 after cleanup, got %d", len(rl.requests))
	}
	rl.mutex.Unlock()
}

func TestSlidingWindowRateLimiter_PartialAllowN(t *testing.T) {
	options := resilience.RateLimiterOptions{
		Rate: 10,
	}
	rl := NewSlidingWindowRateLimiter("test-limiter", options)

	// Add 8 requests
	for i := 0; i < 8; i++ {
		rl.Allow()
	}

	// Should allow a batch of 2
	if !rl.AllowN(2) {
		t.Error("expected batch of 2 to be allowed")
	}

	// Should reject a batch of 1 (window is full)
	if rl.AllowN(1) {
		t.Error("expected batch of 1 to be rejected when window is full")
	}

	// Should reject a batch of 5 (exceeds available capacity)
	if rl.AllowN(5) {
		t.Error("expected batch of 5 to be rejected when it exceeds available capacity")
	}
}

func TestSlidingWindowRateLimiter_EmptyWindow(t *testing.T) {
	options := resilience.RateLimiterOptions{
		Rate: 10,
	}
	rl := NewSlidingWindowRateLimiter("test-limiter", options)

	// Add 10 requests
	for i := 0; i < 10; i++ {
		rl.Allow()
	}

	// Age all requests
	now := time.Now()
	rl.mutex.Lock()
	for i := range rl.requests {
		rl.requests[i] = now.Add(-2 * time.Second) // 2 seconds ago (outside the window)
	}
	rl.mutex.Unlock()

	// Should allow a request (and trigger cleanup)
	if !rl.Allow() {
		t.Error("expected request to be allowed after all previous requests aged out")
	}

	// Check that window was cleaned up
	rl.mutex.Lock()
	if len(rl.requests) != 1 {
		t.Errorf("expected window size 1 after cleanup, got %d", len(rl.requests))
	}
	rl.mutex.Unlock()
}
