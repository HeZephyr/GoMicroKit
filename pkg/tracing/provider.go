package tracing

import (
	"context"
	"fmt"
	"strings"

	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc"
	"go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracehttp"
	"go.opentelemetry.io/otel/propagation"
	"go.opentelemetry.io/otel/sdk/resource"
	sdktrace "go.opentelemetry.io/otel/sdk/trace"
	semconv "go.opentelemetry.io/otel/semconv/v1.17.0"
	"go.opentelemetry.io/otel/trace"
	"go.opentelemetry.io/otel/trace/noop"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

// Provider manages the tracing functionality
type Provider struct {
	options        Options
	tracerProvider trace.TracerProvider
	shutdown       func(context.Context) error
}

// NewProvider creates a new tracing provider
func NewProvider(opts ...Option) (*Provider, error) {
	// Start with default options
	options := DefaultOptions()

	// Apply all provided options
	for _, opt := range opts {
		opt(&options)
	}

	// If tracing is disabled, return a no-op provider
	if !options.Enabled {
		return &Provider{
			options:        options,
			tracerProvider: noop.NewTracerProvider(),
			shutdown:       func(context.Context) error { return nil },
		}, nil
	}

	// Create a resource with service information
	res, err := resource.New(context.Background(),
		resource.WithAttributes(
			semconv.ServiceName(options.ServiceName),
		),
	)
	if err != nil {
		return nil, fmt.Errorf("failed to create resource: %w", err)
	}

	// Create the appropriate exporter based on configuration
	var exporter sdktrace.SpanExporter
	switch options.ExporterType {
	case ExporterTypeOTLPHTTP:
		// For OTLP HTTP, the endpoint should not include the protocol
		// The WithInsecure() option handles using HTTP instead of HTTPS
		endpoint := options.Endpoint

		// Strip any protocol prefix if present
		endpoint = strings.TrimPrefix(endpoint, "http://")
		endpoint = strings.TrimPrefix(endpoint, "https://")

		// Configure OTLP HTTP exporter
		httpOpts := []otlptracehttp.Option{
			otlptracehttp.WithEndpoint(endpoint),
			otlptracehttp.WithInsecure(), // This is crucial for using HTTP instead of HTTPS
			otlptracehttp.WithTimeout(options.ExportTimeout),
		}

		// Add any headers
		if len(options.Headers) > 0 {
			httpOpts = append(httpOpts, otlptracehttp.WithHeaders(options.Headers))
		}

		// Create the exporter
		exporter, err = otlptracehttp.New(context.Background(), httpOpts...)
		if err != nil {
			return nil, fmt.Errorf("failed to create OTLP HTTP exporter: %w", err)
		}

	case ExporterTypeOTLPGRPC:
		// For OTLP gRPC, similar approach
		endpoint := options.Endpoint
		endpoint = strings.TrimPrefix(endpoint, "http://")
		endpoint = strings.TrimPrefix(endpoint, "https://")

		// Configure OTLP gRPC exporter
		grpcOpts := []otlptracegrpc.Option{
			otlptracegrpc.WithEndpoint(endpoint),
			otlptracegrpc.WithTimeout(options.ExportTimeout),
		}

		// Add insecure option if specified
		if options.Insecure {
			grpcOpts = append(grpcOpts, otlptracegrpc.WithInsecure())
			grpcOpts = append(grpcOpts, otlptracegrpc.WithDialOption(grpc.WithTransportCredentials(insecure.NewCredentials())))
		}

		// Create the exporter
		exporter, err = otlptracegrpc.New(context.Background(), grpcOpts...)
		if err != nil {
			return nil, fmt.Errorf("failed to create OTLP gRPC exporter: %w", err)
		}

	case ExporterTypeNone:
		// No exporter needed, traces will be dropped
	default:
		return nil, fmt.Errorf("unsupported exporter type: %s", options.ExporterType)
	}

	// Create a batch span processor if an exporter is configured
	var bsp sdktrace.SpanProcessor
	if exporter != nil {
		bsp = sdktrace.NewBatchSpanProcessor(
			exporter,
			sdktrace.WithBatchTimeout(options.BatchTimeout),
		)
	}

	// Configure the tracer provider
	tpOpts := []sdktrace.TracerProviderOption{
		sdktrace.WithSampler(sdktrace.TraceIDRatioBased(options.SamplingRate)),
		sdktrace.WithResource(res),
	}

	// Add the batch span processor if it was created
	if bsp != nil {
		tpOpts = append(tpOpts, sdktrace.WithSpanProcessor(bsp))
	}

	// Create the tracer provider with all options
	tp := sdktrace.NewTracerProvider(tpOpts...)

	// Set the global tracer provider and propagator
	otel.SetTracerProvider(tp)
	otel.SetTextMapPropagator(propagation.NewCompositeTextMapPropagator(
		propagation.TraceContext{}, // W3C Trace Context format
		propagation.Baggage{},      // W3C Baggage format
	))

	// Store a reference to the SDK tracer provider
	sdkTracerProvider := tp

	return &Provider{
		options:        options,
		tracerProvider: tp,
		shutdown: func(ctx context.Context) error {
			// Call Shutdown on the SDK tracer provider
			return sdkTracerProvider.Shutdown(ctx)
		},
	}, nil
}

// Shutdown shuts down the tracing provider
func (p *Provider) Shutdown(ctx context.Context) error {
	if p.shutdown != nil {
		return p.shutdown(ctx)
	}
	return nil
}

// Tracer returns a tracer for the given name
func (p *Provider) Tracer(name string, opts ...trace.TracerOption) trace.Tracer {
	return p.tracerProvider.Tracer(name, opts...)
}

// ServiceName returns the service name
func (p *Provider) ServiceName() string {
	return p.options.ServiceName
}

// IsEnabled returns true if tracing is enabled
func (p *Provider) IsEnabled() bool {
	return p.options.Enabled
}

// TracerProvider returns the underlying TracerProvider
func (p *Provider) TracerProvider() trace.TracerProvider {
	return p.tracerProvider
}
