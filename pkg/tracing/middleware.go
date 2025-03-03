package tracing

import (
	"context"
	"fmt"
	"path"
	"reflect"
	"runtime"

	"github.com/HeZephyr/GoMicroKit/pkg/service"
	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/codes"
	"go.opentelemetry.io/otel/trace"
)

// TracingMiddleware creates a middleware that adds tracing to service handlers
func TracingMiddleware(provider *Provider) service.Middleware {
	return func(next service.Handler) service.Handler {
		return func(ctx context.Context, req any) (any, error) {
			// If provider is nil or tracing is disabled, skip tracing
			if provider == nil || !provider.IsEnabled() {
				return next(ctx, req)
			}

			// Get the function name of the handler
			funcName := getFunctionName(next)

			// Extract service and method names from context or use defaults
			serviceName := provider.ServiceName()
			methodName := path.Base(funcName)

			// Create span attributes
			attrs := []attribute.KeyValue{
				attribute.String("service", serviceName),
				attribute.String("method", methodName),
				attribute.String("request.type", reflect.TypeOf(req).String()),
			}

			// Start a new span
			ctx, span := provider.Tracer("service.handler").Start(
				ctx,
				fmt.Sprintf("%s.%s", serviceName, methodName),
				trace.WithAttributes(attrs...),
			)

			// Execute the handler and capture the result
			resp, err := next(ctx, req)

			// Handle the error if there is one
			if err != nil {
				span.RecordError(err)
				span.SetStatus(codes.Error, err.Error())
			} else {
				// Add response type as an attribute
				if resp != nil {
					span.SetAttributes(attribute.String("response.type", reflect.TypeOf(resp).String()))
				}
			}

			// End the span
			span.End()

			return resp, err
		}
	}
}

// getFunctionName returns the name of the function
func getFunctionName(i any) string {
	// Get the function pointer
	ptr := reflect.ValueOf(i).Pointer()
	// Get the function name
	name := runtime.FuncForPC(ptr).Name()
	return name
}
