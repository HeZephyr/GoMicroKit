// pkg/tracing/context.go

package tracing

import (
	"context"

	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/codes"
	"go.opentelemetry.io/otel/trace"
)

// StartSpan starts a new span and returns the updated context and span
func StartSpan(ctx context.Context, name string, opts ...trace.SpanStartOption) (context.Context, trace.Span) {
	// Use the global tracer provider to create a span
	return otel.Tracer("").Start(ctx, name, opts...)
}

// StartSpanFromContext starts a new span and returns the updated context and a function to end the span
// This is a convenience function that handles ending the span and recording errors
func StartSpanFromContext(ctx context.Context, name string, opts ...trace.SpanStartOption) (context.Context, func(error)) {
	ctx, span := otel.Tracer("").Start(ctx, name, opts...)
	return ctx, func(err error) {
		if err != nil {
			// If an error occurred, record it and set the span status
			span.RecordError(err)
			span.SetStatus(codes.Error, err.Error())
		}
		// End the span
		span.End()
	}
}

// AddEvent adds an event to the current span in the context
func AddEvent(ctx context.Context, name string, attrs ...attribute.KeyValue) {
	span := trace.SpanFromContext(ctx)
	span.AddEvent(name, trace.WithAttributes(attrs...))
}

// SetAttributes sets attributes on the current span in the context
func SetAttributes(ctx context.Context, attrs ...attribute.KeyValue) {
	span := trace.SpanFromContext(ctx)
	span.SetAttributes(attrs...)
}

// RecordError records an error on the current span in the context
func RecordError(ctx context.Context, err error, opts ...trace.EventOption) {
	span := trace.SpanFromContext(ctx)
	span.RecordError(err, opts...)
	span.SetStatus(codes.Error, err.Error())
}

// SpanFromContext extracts the span from the context
func SpanFromContext(ctx context.Context) trace.Span {
	return trace.SpanFromContext(ctx)
}

// WithSpan wraps a function with a new span
// This is useful for tracing function calls without manually managing spans
func WithSpan(ctx context.Context, name string, fn func(context.Context) error) error {
	ctx, span := StartSpan(ctx, name)
	defer span.End()

	err := fn(ctx)
	if err != nil {
		// Record the error on the span
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
	}

	return err
}
