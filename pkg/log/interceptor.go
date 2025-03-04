// pkg/log/interceptor.go
package log

import (
	"context"
	"time"

	"go.opentelemetry.io/otel/trace"
	"google.golang.org/grpc"
)

// LoggingInterceptor creates a logging interceptor for unary gRPC calls
func LoggingInterceptor(logger Logger) grpc.UnaryServerInterceptor {
	return func(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
		startTime := time.Now()
		logger.Info("Received gRPC request: %s, type: %T", info.FullMethod, req)

		// Extract and log trace information if available
		span := trace.SpanFromContext(ctx)
		if span.SpanContext().IsValid() {
			logger.Info("Trace ID: %s, Span ID: %s",
				span.SpanContext().TraceID().String(),
				span.SpanContext().SpanID().String())
		}

		// Process the request
		resp, err := handler(ctx, req)

		// Log result information
		duration := time.Since(startTime)
		if err != nil {
			logger.Error("gRPC request %s failed after %v: %v", info.FullMethod, duration, err)
		} else {
			logger.Info("gRPC request %s succeeded in %v", info.FullMethod, duration)
		}

		return resp, err
	}
}

// LoggingStreamInterceptor creates a logging interceptor for streaming gRPC calls
func LoggingStreamInterceptor(logger Logger) grpc.StreamServerInterceptor {
	return func(srv interface{}, ss grpc.ServerStream, info *grpc.StreamServerInfo, handler grpc.StreamHandler) error {
		startTime := time.Now()
		logger.Info("Received gRPC stream: %s, server stream: %v", info.FullMethod, info.IsServerStream)

		// Extract and log trace information if available
		ctx := ss.Context()
		span := trace.SpanFromContext(ctx)
		if span.SpanContext().IsValid() {
			logger.Info("Trace ID: %s, Span ID: %s",
				span.SpanContext().TraceID().String(),
				span.SpanContext().SpanID().String())
		}

		// Process the stream
		err := handler(srv, ss)

		// Log result information
		duration := time.Since(startTime)
		if err != nil {
			logger.Error("gRPC stream %s failed after %v: %v", info.FullMethod, duration, err)
		} else {
			logger.Info("gRPC stream %s succeeded in %v", info.FullMethod, duration)
		}

		return err
	}
}
