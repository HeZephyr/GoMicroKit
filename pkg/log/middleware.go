// pkg/log/middleware.go
package log

import (
	"context"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/service"
	"go.opentelemetry.io/otel/trace"
)

// LoggingMiddleware logs information about requests
func LoggingMiddleware(logger Logger) service.Middleware {
	return func(next service.Handler) service.Handler {
		return func(ctx context.Context, req any) (any, error) {
			startTime := time.Now()
			logger.Info("Received request: %T", req)

			// Extract and log trace information if available
			span := trace.SpanFromContext(ctx)
			if span.SpanContext().IsValid() {
				logger.Info("Trace ID: %s, Span ID: %s",
					span.SpanContext().TraceID().String(),
					span.SpanContext().SpanID().String())
			}

			resp, err := next(ctx, req)

			duration := time.Since(startTime)
			if err != nil {
				logger.Error("Request failed after %v: %v", duration, err)
			} else {
				logger.Info("Request succeeded in %v", duration)
			}

			return resp, err
		}
	}
}
