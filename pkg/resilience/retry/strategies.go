package retry

import (
	"errors"
	"fmt"
	"net"
	"net/http"
	"strings"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/resilience"
)

// Common retry strategies

// NetworkErrorsOnly returns a retry function that only retries network errors
func NetworkErrorsOnly() func(error) bool {
	return func(err error) bool {
		if err == nil {
			return false
		}

		var netErr net.Error
		if errors.As(err, &netErr) {
			return true
		}

		// Check for common network error messages
		errMsg := strings.ToLower(err.Error())
		return strings.Contains(errMsg, "connection") ||
			strings.Contains(errMsg, "network") ||
			strings.Contains(errMsg, "reset") ||
			strings.Contains(errMsg, "timeout")
	}
}

// HTTPStatusCodeRetry returns a retry function that retries specific HTTP status codes
func HTTPStatusCodeRetry(statusCodes ...int) func(error) bool {
	// Convert status codes to a map for O(1) lookup
	retryableStatusCodes := make(map[int]bool)
	for _, code := range statusCodes {
		retryableStatusCodes[code] = true
	}

	return func(err error) bool {
		if err == nil {
			return false
		}

		// Try different approaches to extract HTTP status code

		// 1. Check for errors with StatusCode method
		type statusCoder interface {
			StatusCode() int
		}

		if sc, ok := err.(statusCoder); ok {
			return retryableStatusCodes[sc.StatusCode()]
		}

		// 2. Check for errors with Response method that returns *http.Response
		type responseGetter interface {
			Response() *http.Response
		}

		if rg, ok := err.(responseGetter); ok && rg.Response() != nil {
			return retryableStatusCodes[rg.Response().StatusCode]
		}

		// 3. Check for custom HTTP errors in various client libraries
		type httpStatusError interface {
			HTTPStatusCode() int
		}

		if hse, ok := err.(httpStatusError); ok {
			return retryableStatusCodes[hse.HTTPStatusCode()]
		}

		// 4. Check error message for status code patterns (less reliable)
		errMsg := err.Error()
		for code := range retryableStatusCodes {
			if strings.Contains(errMsg, fmt.Sprintf("status code %d", code)) ||
				strings.Contains(errMsg, fmt.Sprintf("status: %d", code)) ||
				strings.Contains(errMsg, fmt.Sprintf("%d ", code)) {
				return true
			}
		}

		return false
	}
}

// TemporaryErrorsOnly returns a retry function that only retries temporary errors
func TemporaryErrorsOnly() func(error) bool {
	return func(err error) bool {
		if err == nil {
			return false
		}

		// Check for the Temporary interface
		var tempErr interface {
			Temporary() bool
		}

		if errors.As(err, &tempErr) {
			return tempErr.Temporary()
		}

		return false
	}
}

// RetryAll returns a retry function that retries all errors
func RetryAll() func(error) bool {
	return func(err error) bool {
		return err != nil
	}
}

// RetryNone returns a retry function that never retries
func RetryNone() func(error) bool {
	return func(error) bool {
		return false
	}
}

// Combine combines multiple retry strategies with OR logic
func Combine(strategies ...func(error) bool) func(error) bool {
	return func(err error) bool {
		for _, strategy := range strategies {
			if strategy(err) {
				return true
			}
		}
		return false
	}
}

// WithMaxAttempts creates retry options with specified max attempts
func WithMaxAttempts(attempts int) resilience.RetryOptions {
	options := DefaultOptions()
	options.Attempts = attempts
	return options
}

// WithExponentialBackoff creates retry options with exponential backoff parameters
func WithExponentialBackoff(initialDelay time.Duration, factor float64, maxDelay time.Duration) resilience.RetryOptions {
	options := DefaultOptions()
	options.Delay = initialDelay
	options.BackoffFactor = factor
	options.MaxDelay = maxDelay
	return options
}

// WithFixedDelay creates retry options with a fixed delay
func WithFixedDelay(delay time.Duration, attempts int) resilience.RetryOptions {
	options := DefaultOptions()
	options.Delay = delay
	options.BackoffFactor = 1.0 // No increase in delay
	options.Attempts = attempts
	return options
}
