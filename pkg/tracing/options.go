// pkg/tracing/options.go

package tracing

import (
	"strings"
	"time"
)

// ExporterType defines the available trace data exporters
type ExporterType string

const (
	// ExporterTypeOTLPHTTP indicates OTLP HTTP exporter
	ExporterTypeOTLPHTTP ExporterType = "otlp-http"
	// ExporterTypeOTLPGRPC indicates OTLP gRPC exporter
	ExporterTypeOTLPGRPC ExporterType = "otlp-grpc"
	// ExporterTypeNone indicates no exporter (traces are dropped)
	ExporterTypeNone ExporterType = "none"
)

// Options contains configuration for the tracing system
type Options struct {
	// ServiceName is the name of the service
	ServiceName string
	// Enabled indicates whether tracing is enabled
	Enabled bool
	// ExporterType specifies which exporter to use
	ExporterType ExporterType
	// Endpoint is the URL where traces are sent
	Endpoint string
	// Headers are additional headers to send with OTLP HTTP requests
	Headers map[string]string
	// SamplingRate determines what fraction of traces are sampled (0.0-1.0)
	SamplingRate float64
	// BatchTimeout is how long the exporter waits before sending a batch
	BatchTimeout time.Duration
	// ExportTimeout is the maximum time allowed for exporting
	ExportTimeout time.Duration
	// Insecure determines whether to use TLS (for OTLP gRPC)
	Insecure bool
}

// Option is a function that configures Options
type Option func(*Options)

// DefaultOptions returns the default configuration
func DefaultOptions() Options {
	return Options{
		ServiceName:   "unknown-service",
		Enabled:       true,
		ExporterType:  ExporterTypeOTLPHTTP,
		Endpoint:      "http://localhost:4318", // Default OTLP HTTP endpoint
		Headers:       map[string]string{},
		SamplingRate:  1.0, // Sample all traces by default
		BatchTimeout:  5 * time.Second,
		ExportTimeout: 30 * time.Second,
		Insecure:      false,
	}
}

// WithServiceName sets the service name
func WithServiceName(name string) Option {
	return func(o *Options) {
		o.ServiceName = name
	}
}

// WithEnabled enables or disables tracing
func WithEnabled(enabled bool) Option {
	return func(o *Options) {
		o.Enabled = enabled
	}
}

// WithOTLPHTTPExporter configures the OTLP HTTP exporter
func WithOTLPHTTPExporter(endpoint string) Option {
	return func(o *Options) {
		o.ExporterType = ExporterTypeOTLPHTTP
		// Strip any protocol prefix from the endpoint
		endpoint = strings.TrimPrefix(endpoint, "http://")
		endpoint = strings.TrimPrefix(endpoint, "https://")
		o.Endpoint = endpoint
		o.Insecure = true // Default to insecure for HTTP
	}
}

// WithOTLPGRPCExporter configures the OTLP gRPC exporter
func WithOTLPGRPCExporter(endpoint string, insecure bool) Option {
	return func(o *Options) {
		o.ExporterType = ExporterTypeOTLPGRPC
		o.Endpoint = endpoint
		o.Insecure = insecure
	}
}

// WithNoExporter disables exporting (traces are dropped)
func WithNoExporter() Option {
	return func(o *Options) {
		o.ExporterType = ExporterTypeNone
	}
}

// WithHeader adds a header for OTLP HTTP exporter
func WithHeader(key, value string) Option {
	return func(o *Options) {
		if o.Headers == nil {
			o.Headers = make(map[string]string)
		}
		o.Headers[key] = value
	}
}

// WithSamplingRate sets the sampling rate (0.0-1.0)
func WithSamplingRate(rate float64) Option {
	return func(o *Options) {
		o.SamplingRate = rate
	}
}

// WithBatchTimeout sets the batch timeout
func WithBatchTimeout(timeout time.Duration) Option {
	return func(o *Options) {
		o.BatchTimeout = timeout
	}
}

// WithExportTimeout sets the export timeout
func WithExportTimeout(timeout time.Duration) Option {
	return func(o *Options) {
		o.ExportTimeout = timeout
	}
}
