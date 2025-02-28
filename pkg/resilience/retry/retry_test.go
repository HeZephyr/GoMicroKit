package retry

import (
	"context"
	"errors"
	"net"
	"net/http"
	"testing"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
)

func TestRetry_Name(t *testing.T) {
	retry := NewRetry("test-retry", DefaultOptions())
	if retry.Name() != "test-retry" {
		t.Errorf("expected name 'test-retry', got '%s'", retry.Name())
	}
}

func TestRetry_DefaultOptions(t *testing.T) {
	// Test with zero values - should use defaults
	retry := NewRetry("test-retry", resilience.RetryOptions{})

	if retry.options.Attempts != 3 {
		t.Errorf("expected default attempts 3, got %d", retry.options.Attempts)
	}

	if retry.options.Delay != 100*time.Millisecond {
		t.Errorf("expected default delay 100ms, got %v", retry.options.Delay)
	}

	if retry.options.MaxDelay != 10*time.Second {
		t.Errorf("expected default max delay 10s, got %v", retry.options.MaxDelay)
	}

	if retry.options.BackoffFactor != 2.0 {
		t.Errorf("expected default backoff factor 2.0, got %f", retry.options.BackoffFactor)
	}

	if retry.options.RetryableFunc == nil {
		t.Errorf("expected default retryable function, got nil")
	}
}

func TestRetry_Execute_Success(t *testing.T) {
	retry := NewRetry("test-retry", DefaultOptions())

	// Function that succeeds on first attempt
	callCount := 0
	fn := func(ctx context.Context) (any, error) {
		callCount++
		return "success", nil
	}

	result, err := retry.Execute(context.Background(), fn)

	if err != nil {
		t.Errorf("expected no error, got %v", err)
	}

	if result != "success" {
		t.Errorf("expected result 'success', got %v", result)
	}

	if callCount != 1 {
		t.Errorf("expected function to be called once, got %d", callCount)
	}
}

func TestRetry_Execute_EventualSuccess(t *testing.T) {
	retry := NewRetry("test-retry", DefaultOptions())

	// Function that succeeds on third attempt
	callCount := 0
	fn := func(ctx context.Context) (any, error) {
		callCount++
		if callCount < 3 {
			return nil, errors.New("temporary error")
		}
		return "success", nil
	}

	result, err := retry.Execute(context.Background(), fn)

	if err != nil {
		t.Errorf("expected no error, got %v", err)
	}

	if result != "success" {
		t.Errorf("expected result 'success', got %v", result)
	}

	if callCount != 3 {
		t.Errorf("expected function to be called 3 times, got %d", callCount)
	}
}

func TestRetry_Execute_Failure(t *testing.T) {
	options := resilience.RetryOptions{
		Attempts:      3,
		Delay:         1 * time.Millisecond, // Use small delay for testing
		RetryableFunc: RetryAll(),
	}
	retry := NewRetry("test-retry", options)

	// Function that always fails
	expectedErr := errors.New("persistent error")
	callCount := 0
	fn := func(ctx context.Context) (any, error) {
		callCount++
		return nil, expectedErr
	}

	result, err := retry.Execute(context.Background(), fn)

	if err != expectedErr {
		t.Errorf("expected error %v, got %v", expectedErr, err)
	}

	if result != nil {
		t.Errorf("expected nil result, got %v", result)
	}

	if callCount != options.Attempts {
		t.Errorf("expected function to be called %d times, got %d", options.Attempts, callCount)
	}
}

func TestRetry_Execute_NonRetryableError(t *testing.T) {
	// Only retry errors containing "retry"
	options := resilience.RetryOptions{
		Attempts: 3,
		Delay:    1 * time.Millisecond, // Use small delay for testing
		RetryableFunc: func(err error) bool {
			return err != nil && errors.Is(err, errors.New("retry"))
		},
	}
	retry := NewRetry("test-retry", options)

	// Function that returns non-retryable error
	expectedErr := errors.New("non-retryable error")
	callCount := 0
	fn := func(ctx context.Context) (any, error) {
		callCount++
		return nil, expectedErr
	}

	result, err := retry.Execute(context.Background(), fn)

	if err != expectedErr {
		t.Errorf("expected error %v, got %v", expectedErr, err)
	}

	if result != nil {
		t.Errorf("expected nil result, got %v", result)
	}

	if callCount != 1 {
		t.Errorf("expected function to be called once, got %d", callCount)
	}
}

func TestRetry_Execute_ContextCancellation(t *testing.T) {
	options := resilience.RetryOptions{
		Attempts:      5,
		Delay:         1 * time.Millisecond, // Use small delay for testing
		RetryableFunc: RetryAll(),
	}
	retry := NewRetry("test-retry", options)

	// Create a context that cancels after a short time
	ctx, cancel := context.WithCancel(context.Background())

	// Function that always fails
	callCount := 0
	fn := func(ctx context.Context) (any, error) {
		callCount++
		// Cancel the context after first call
		if callCount == 1 {
			cancel()
		}
		return nil, errors.New("error")
	}

	result, err := retry.Execute(ctx, fn)

	if err != context.Canceled {
		t.Errorf("expected context.Canceled error, got %v", err)
	}

	if result != nil {
		t.Errorf("expected nil result, got %v", result)
	}

	if callCount != 1 {
		t.Errorf("expected function to be called once, got %d", callCount)
	}
}

func TestRetry_CalculateBackoff(t *testing.T) {
	options := resilience.RetryOptions{
		Delay:         100 * time.Millisecond,
		MaxDelay:      5 * time.Second,
		BackoffFactor: 2.0,
	}
	retry := NewRetry("test-retry", options)

	// Test backoff for different attempts
	tests := []struct {
		attempt   int
		expected  time.Duration // Approximate due to jitter
		maxJitter time.Duration
	}{
		{0, 100 * time.Millisecond, 10 * time.Millisecond},
		{1, 200 * time.Millisecond, 20 * time.Millisecond},
		{2, 400 * time.Millisecond, 40 * time.Millisecond},
		{3, 800 * time.Millisecond, 80 * time.Millisecond},
		{10, 5 * time.Second, 500 * time.Millisecond}, // Should be capped at MaxDelay
	}

	for _, test := range tests {
		backoff := retry.calculateBackoff(test.attempt)

		// Check if backoff is within expected range (accounting for jitter)
		minExpected := test.expected - test.maxJitter
		maxExpected := test.expected + test.maxJitter

		if backoff < minExpected || backoff > maxExpected {
			if test.attempt == 10 {
				// For the max delay case, we expect it to be capped
				if backoff > options.MaxDelay {
					t.Errorf("backoff for attempt %d exceeded max delay: got %v, max %v",
						test.attempt, backoff, options.MaxDelay)
				}
			} else {
				t.Errorf("backoff for attempt %d outside expected range: got %v, expected between %v and %v",
					test.attempt, backoff, minExpected, maxExpected)
			}
		}
	}
}

// Mock HTTP error type for testing
type mockHTTPError struct {
	statusCode int
}

func (e mockHTTPError) Error() string {
	return "HTTP error"
}

func (e mockHTTPError) StatusCode() int {
	return e.statusCode
}

// Mock response getter error
type mockResponseError struct {
	resp *http.Response
}

func (e mockResponseError) Error() string {
	return "response error"
}

func (e mockResponseError) Response() *http.Response {
	return e.resp
}

func TestRetryStrategies(t *testing.T) {
	// Test NetworkErrorsOnly
	netErr := &net.OpError{Op: "read", Err: errors.New("connection reset")}
	if !NetworkErrorsOnly()(netErr) {
		t.Error("NetworkErrorsOnly should retry net.OpError")
	}

	// Test string-based network error detection
	strErr := errors.New("connection timed out")
	if !NetworkErrorsOnly()(strErr) {
		t.Error("NetworkErrorsOnly should retry errors with 'connection' in message")
	}

	// Test non-network error
	otherErr := errors.New("other error")
	if NetworkErrorsOnly()(otherErr) {
		t.Error("NetworkErrorsOnly should not retry non-network errors")
	}

	// Test HTTPStatusCodeRetry with StatusCode method
	httpRetry := HTTPStatusCodeRetry(500, 503)

	err500 := mockHTTPError{statusCode: 500}
	if !httpRetry(err500) {
		t.Error("HTTPStatusCodeRetry should retry 500 errors")
	}

	err400 := mockHTTPError{statusCode: 400}
	if httpRetry(err400) {
		t.Error("HTTPStatusCodeRetry should not retry 400 errors")
	}

	// Test HTTPStatusCodeRetry with Response method
	resp500 := &http.Response{StatusCode: 500}
	respErr := mockResponseError{resp: resp500}
	if !httpRetry(respErr) {
		t.Error("HTTPStatusCodeRetry should retry errors with Response returning status 500")
	}

	// Test HTTPStatusCodeRetry with error message
	msgErr := errors.New("request failed with status code 503")
	if !httpRetry(msgErr) {
		t.Error("HTTPStatusCodeRetry should retry errors with status code in message")
	}

	// Test RetryAll and RetryNone
	someErr := errors.New("some error")
	if !RetryAll()(someErr) {
		t.Error("RetryAll should retry all errors")
	}

	if RetryNone()(someErr) {
		t.Error("RetryNone should not retry any errors")
	}

	// Test Combine
	combined := Combine(
		func(err error) bool { return false },
		func(err error) bool { return true },
	)

	if !combined(someErr) {
		t.Error("Combine with OR logic should return true if any strategy returns true")
	}
}

// Mock temporary error
type tempError struct {
	error
	temp bool
}

func (e tempError) Temporary() bool {
	return e.temp
}

func TestTemporaryErrorsOnly(t *testing.T) {

	// Create temporary and non-temporary errors
	tempErr := tempError{error: errors.New("temporary error"), temp: true}
	nonTempErr := tempError{error: errors.New("non-temporary error"), temp: false}

	// Test strategy
	strategy := TemporaryErrorsOnly()

	if !strategy(tempErr) {
		t.Error("TemporaryErrorsOnly should retry temporary errors")
	}

	if strategy(nonTempErr) {
		t.Error("TemporaryErrorsOnly should not retry non-temporary errors")
	}

	if strategy(errors.New("regular error")) {
		t.Error("TemporaryErrorsOnly should not retry errors without Temporary method")
	}
}

func TestRetryOptionFactories(t *testing.T) {
	// Test WithMaxAttempts
	options := WithMaxAttempts(5)
	if options.Attempts != 5 {
		t.Errorf("WithMaxAttempts: expected Attempts=5, got %d", options.Attempts)
	}

	// Test WithExponentialBackoff
	options = WithExponentialBackoff(200*time.Millisecond, 3.0, 5*time.Second)
	if options.Delay != 200*time.Millisecond {
		t.Errorf("WithExponentialBackoff: expected Delay=200ms, got %v", options.Delay)
	}
	if options.BackoffFactor != 3.0 {
		t.Errorf("WithExponentialBackoff: expected BackoffFactor=3.0, got %f", options.BackoffFactor)
	}
	if options.MaxDelay != 5*time.Second {
		t.Errorf("WithExponentialBackoff: expected MaxDelay=5s, got %v", options.MaxDelay)
	}

	// Test WithFixedDelay
	options = WithFixedDelay(300*time.Millisecond, 4)
	if options.Delay != 300*time.Millisecond {
		t.Errorf("WithFixedDelay: expected Delay=300ms, got %v", options.Delay)
	}
	if options.BackoffFactor != 1.0 {
		t.Errorf("WithFixedDelay: expected BackoffFactor=1.0, got %f", options.BackoffFactor)
	}
	if options.Attempts != 4 {
		t.Errorf("WithFixedDelay: expected Attempts=4, got %d", options.Attempts)
	}
}
