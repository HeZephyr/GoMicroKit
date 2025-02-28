package ratelimit

import (
	"context"
	"sync"
	"testing"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
	"github.com/HeZephyr/GoMicroKit/pkg/service"
)

func TestTokenBucketRateLimiter_Name(t *testing.T) {
	rl := NewTokenBucketRateLimiter("test-limiter", resilience.RateLimiterOptions{})
	if rl.Name() != "test-limiter" {
		t.Errorf("expected name 'test-limiter', got '%s'", rl.Name())
	}
}

func TestTokenBucketRateLimiter_DefaultOptions(t *testing.T) {
	// Test with zero values - should use defaults
	rl := NewTokenBucketRateLimiter("test-limiter", resilience.RateLimiterOptions{})

	// Check internal state
	rl.mutex.Lock()
	defer rl.mutex.Unlock()

	if rl.rate != 100 {
		t.Errorf("expected default rate 100, got %f", rl.rate)
	}

	if rl.burst != 100 {
		t.Errorf("expected default burst 100, got %d", rl.burst)
	}

	if rl.tokens != 100 {
		t.Errorf("expected initial tokens 100, got %f", rl.tokens)
	}
}

func TestTokenBucketRateLimiter_Allow(t *testing.T) {
	// Create a rate limiter with 10 requests per second and burst of 5
	options := resilience.RateLimiterOptions{
		Rate:  10,
		Burst: 5,
	}
	rl := NewTokenBucketRateLimiter("test-limiter", options)

	// Should allow burst requests immediately
	for i := 0; i < options.Burst; i++ {
		if !rl.Allow() {
			t.Errorf("expected request %d to be allowed", i+1)
		}
	}

	// Next request should be rejected
	if rl.Allow() {
		t.Error("expected request to be rejected after burst")
	}

	// Manually add tokens to simulate time passing
	rl.mutex.Lock()
	rl.tokens = 1.0
	rl.mutex.Unlock()

	// Should allow one more request
	if !rl.Allow() {
		t.Error("expected request to be allowed after refill")
	}

	// Should reject again
	if rl.Allow() {
		t.Error("expected request to be rejected after consuming refill")
	}
}

func TestTokenBucketRateLimiter_AllowN(t *testing.T) {
	options := resilience.RateLimiterOptions{
		Rate:  100,
		Burst: 20,
	}
	rl := NewTokenBucketRateLimiter("test-limiter", options)

	// Should allow a batch of 10
	if !rl.AllowN(10) {
		t.Error("expected batch of 10 to be allowed")
	}

	// Should allow another batch of 10
	if !rl.AllowN(10) {
		t.Error("expected second batch of 10 to be allowed")
	}

	// Should reject a batch of 10 (only 0 tokens left)
	if rl.AllowN(10) {
		t.Error("expected third batch to be rejected")
	}

	// Should reject a batch of 1
	if rl.AllowN(1) {
		t.Error("expected batch of 1 to be rejected (0 tokens left)")
	}

	// Add some tokens
	rl.mutex.Lock()
	rl.tokens = 5.0
	rl.mutex.Unlock()

	// Should allow a batch of 5
	if !rl.AllowN(5) {
		t.Error("expected batch of 5 to be allowed after refill")
	}

	// Should reject a batch of 1 (0 tokens left)
	if rl.AllowN(1) {
		t.Error("expected batch of 1 to be rejected after consuming refill")
	}
}

func TestTokenBucketRateLimiter_Refill(t *testing.T) {
	options := resilience.RateLimiterOptions{
		Rate:  10,
		Burst: 10,
	}
	rl := NewTokenBucketRateLimiter("test-limiter", options)

	// Consume all tokens
	for i := 0; i < options.Burst; i++ {
		rl.Allow()
	}

	// Set the last refill time to 0.5 seconds ago
	rl.mutex.Lock()
	rl.lastRefill = time.Now().Add(-500 * time.Millisecond)
	rl.mutex.Unlock()

	// Should have refilled 5 tokens (10 tokens/sec * 0.5 sec = 5 tokens)
	// So this should allow 5 requests
	for i := 0; i < 5; i++ {
		if !rl.Allow() {
			t.Errorf("expected request %d to be allowed after refill", i+1)
		}
	}

	// Next request should be rejected
	if rl.Allow() {
		t.Error("expected request to be rejected after consuming refill")
	}
}

func TestTokenBucketRateLimiter_Reset(t *testing.T) {
	options := resilience.RateLimiterOptions{
		Rate:  10,
		Burst: 5,
	}
	rl := NewTokenBucketRateLimiter("test-limiter", options)

	// Consume all tokens
	for i := 0; i < options.Burst; i++ {
		rl.Allow()
	}

	// Next request should be rejected
	if rl.Allow() {
		t.Error("expected request to be rejected after burst")
	}

	// Reset the limiter
	rl.Reset()

	// Check internal state
	rl.mutex.Lock()
	if rl.tokens != float64(options.Burst) {
		t.Errorf("expected tokens to be %d after reset, got %f", options.Burst, rl.tokens)
	}
	rl.mutex.Unlock()

	// Should allow burst requests again
	for i := 0; i < options.Burst; i++ {
		if !rl.Allow() {
			t.Errorf("expected request %d to be allowed after reset", i+1)
		}
	}
}

func TestTokenBucketRateLimiter_Concurrency(t *testing.T) {
	options := resilience.RateLimiterOptions{
		Rate:  100,
		Burst: 100,
	}
	rl := NewTokenBucketRateLimiter("test-limiter", options)

	// Set initial tokens
	rl.mutex.Lock()
	rl.tokens = 50
	rl.mutex.Unlock()

	// Run concurrent requests
	var wg sync.WaitGroup
	successCount := int32(0)
	var mu sync.Mutex

	// Launch 100 concurrent requests
	for i := 0; i < 100; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			if rl.Allow() {
				mu.Lock()
				successCount++
				mu.Unlock()
			}
		}()
	}

	wg.Wait()

	// Should have allowed approximately 50 requests
	if successCount < 45 || successCount > 55 {
		t.Errorf("expected around 50 successful requests, got %d", successCount)
	}
}

func TestTokenBucketRateLimiter_Middleware(t *testing.T) {
	options := resilience.RateLimiterOptions{
		Rate:  10,
		Burst: 5,
	}
	rl := NewTokenBucketRateLimiter("test-limiter", options)

	// Create a test handler
	handlerCalled := false
	handler := func(ctx context.Context, req any) (any, error) {
		handlerCalled = true
		return "success", nil
	}

	// Apply rate limiter middleware
	middleware := RateLimiterMiddleware(rl)
	limitedHandler := middleware(handler)

	// Should allow burst requests
	for i := 0; i < options.Burst; i++ {
		handlerCalled = false
		result, err := limitedHandler(context.Background(), "request")

		if err != nil {
			t.Errorf("expected no error for request %d, got %v", i+1, err)
		}
		if !handlerCalled {
			t.Errorf("expected handler to be called for request %d", i+1)
		}
		if result != "success" {
			t.Errorf("expected result 'success' for request %d, got %v", i+1, result)
		}
	}

	// Next request should be rejected
	handlerCalled = false
	_, err := limitedHandler(context.Background(), "request")

	if err != resilience.ErrRateLimited {
		t.Errorf("expected ErrRateLimited, got %v", err)
	}
	if handlerCalled {
		t.Error("expected handler not to be called when rate limited")
	}
}

func TestTokenBucketRateLimiter_MiddlewareChain(t *testing.T) {
	options := resilience.RateLimiterOptions{
		Rate:  10,
		Burst: 5,
	}
	rl := NewTokenBucketRateLimiter("test-limiter", options)

	// Create a test handler
	handlerCalled := false
	handler := func(ctx context.Context, req any) (any, error) {
		handlerCalled = true
		return "success", nil
	}

	// Create middleware chain
	middleware := service.Chain(RateLimiterMiddleware(rl))
	limitedHandler := middleware(handler)

	// Should allow burst requests
	for i := 0; i < options.Burst; i++ {
		handlerCalled = false
		_, err := limitedHandler(context.Background(), "request")

		if err != nil {
			t.Errorf("expected no error for request %d, got %v", i+1, err)
		}
		if !handlerCalled {
			t.Errorf("expected handler to be called for request %d", i+1)
		}
	}

	// Next request should be rejected
	handlerCalled = false
	_, err := limitedHandler(context.Background(), "request")

	if err != resilience.ErrRateLimited {
		t.Errorf("expected ErrRateLimited, got %v", err)
	}
	if handlerCalled {
		t.Error("expected handler not to be called when rate limited")
	}
}
