// pkg/tracing/interceptor.go
package tracing

import (
	"context"
	"fmt"

	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/codes"
	"go.opentelemetry.io/otel/trace"
	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/peer"
	"google.golang.org/protobuf/proto"
)

// TracingInterceptor creates a unary interceptor that adds tracing to gRPC handlers
func TracingInterceptor(provider *Provider) grpc.UnaryServerInterceptor {
	return func(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
		// If provider is nil or tracing is disabled, skip tracing
		if provider == nil || !provider.IsEnabled() {
			return handler(ctx, req)
		}

		// Extract service and method names from the full method name (e.g., "/service.Service/Method")
		fullMethod := info.FullMethod
		serviceName := provider.ServiceName()
		methodName := fullMethod

		// Create span attributes
		attrs := []attribute.KeyValue{
			attribute.String("rpc.system", "grpc"),
			attribute.String("rpc.service", serviceName),
			attribute.String("rpc.method", methodName),
		}

		// Add client address if available
		if p, ok := peer.FromContext(ctx); ok {
			attrs = append(attrs, attribute.String("peer.address", p.Addr.String()))
		}

		// Add request metadata if available
		if md, ok := metadata.FromIncomingContext(ctx); ok {
			for k, v := range md {
				if len(v) > 0 {
					attrs = append(attrs, attribute.String("request.metadata."+k, v[0]))
				}
			}
		}

		// Add request size if it's a protobuf message
		if m, ok := req.(proto.Message); ok {
			attrs = append(attrs, attribute.Int("request.size", proto.Size(m)))
		}

		// Start a new span
		ctx, span := provider.Tracer("grpc.server").Start(
			ctx,
			fmt.Sprintf("%s.%s", serviceName, methodName),
			trace.WithAttributes(attrs...),
		)
		defer span.End()

		// Execute the handler and capture the result
		resp, err := handler(ctx, req)

		// Handle the error if there is one
		if err != nil {
			span.RecordError(err)
			span.SetStatus(codes.Error, err.Error())
		} else {
			// Add response size if it's a protobuf message
			if m, ok := resp.(proto.Message); ok {
				span.SetAttributes(attribute.Int("response.size", proto.Size(m)))
			}
		}

		return resp, err
	}
}

// TracingStreamInterceptor creates a stream interceptor that adds tracing to gRPC stream handlers
func TracingStreamInterceptor(provider *Provider) grpc.StreamServerInterceptor {
	return func(srv interface{}, ss grpc.ServerStream, info *grpc.StreamServerInfo, handler grpc.StreamHandler) error {
		// If provider is nil or tracing is disabled, skip tracing
		if provider == nil || !provider.IsEnabled() {
			return handler(srv, ss)
		}

		// Extract service and method names from the full method name
		fullMethod := info.FullMethod
		serviceName := provider.ServiceName()
		methodName := fullMethod

		ctx := ss.Context()

		// Create span attributes
		attrs := []attribute.KeyValue{
			attribute.String("rpc.system", "grpc"),
			attribute.String("rpc.service", serviceName),
			attribute.String("rpc.method", methodName),
			attribute.Bool("rpc.stream.is_client_stream", info.IsClientStream),
			attribute.Bool("rpc.stream.is_server_stream", info.IsServerStream),
		}

		// Add client address if available
		if p, ok := peer.FromContext(ctx); ok {
			attrs = append(attrs, attribute.String("peer.address", p.Addr.String()))
		}

		// Add request metadata if available
		if md, ok := metadata.FromIncomingContext(ctx); ok {
			for k, v := range md {
				if len(v) > 0 {
					attrs = append(attrs, attribute.String("request.metadata."+k, v[0]))
				}
			}
		}

		// Start a new span
		ctx, span := provider.Tracer("grpc.server").Start(
			ctx,
			fmt.Sprintf("%s.%s", serviceName, methodName),
			trace.WithAttributes(attrs...),
		)

		// Create a wrapped stream that uses the new context
		wrappedStream := &wrappedServerStream{
			ServerStream: ss,
			ctx:          ctx,
		}

		// Execute the handler and capture the result
		err := handler(srv, wrappedStream)

		// Handle the error if there is one
		if err != nil {
			span.RecordError(err)
			span.SetStatus(codes.Error, err.Error())
		}

		// End the span
		span.End()

		return err
	}
}

// wrappedServerStream wraps a grpc.ServerStream with a new context
type wrappedServerStream struct {
	grpc.ServerStream
	ctx context.Context
}

// Context returns the wrapped context
func (w *wrappedServerStream) Context() context.Context {
	return w.ctx
}
