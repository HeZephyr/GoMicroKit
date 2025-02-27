// pkg/service/service_test.go
package service_test

import (
	"context"
	"fmt"
	"reflect"
	"testing"

	"github.com/HeZephyr/GoMicroKit/pkg/service"
)

// TestRequest is a test request type
type TestRequest struct {
	Name string `json:"name"`
}

// TestResponse is a test response type
type TestResponse struct {
	Message string `json:"message"`
}

// SampleHandler is a handler function used in tests
func SampleHandler(ctx context.Context, req *TestRequest) (*TestResponse, error) {
	return &TestResponse{Message: fmt.Sprintf("Hello, %s!", req.Name)}, nil
}

func TestNewService(t *testing.T) {
	name := "test-service"
	version := "1.0.0"
	svc := service.NewService(name, version)

	if svc.Name() != name {
		t.Errorf("Expected service name %s, got %s", name, svc.Name())
	}

	if svc.Version() != version {
		t.Errorf("Expected service version %s, got %s", version, svc.Version())
	}

	if len(svc.Endpoints()) != 0 {
		t.Errorf("Expected 0 endpoints, got %d", len(svc.Endpoints()))
	}
}

func TestServiceAddEndpoint(t *testing.T) {
	svc := service.NewService("test-service", "1.0.0")
	endpoint := service.NewEndpoint(
		"test-endpoint",
		SampleHandler,
		&TestRequest{},
		&TestResponse{},
	)

	svc.AddEndpoint(endpoint)

	if len(svc.Endpoints()) != 1 {
		t.Fatalf("Expected 1 endpoint, got %d", len(svc.Endpoints()))
	}

	ep := svc.Endpoints()[0]
	if ep.Name() != "test-endpoint" {
		t.Errorf("Expected endpoint name 'test-endpoint', got '%s'", ep.Name())
	}
}

func TestServiceMetadata(t *testing.T) {
	svc := service.NewService("test-service", "1.0.0")
	svc.AddMetadata("key1", "value1")
	svc.AddMetadata("key2", "value2")

	metadata := svc.Metadata()
	if len(metadata) != 2 {
		t.Fatalf("Expected 2 metadata entries, got %d", len(metadata))
	}

	if metadata["key1"] != "value1" {
		t.Errorf("Expected metadata['key1'] = 'value1', got '%s'", metadata["key1"])
	}

	if metadata["key2"] != "value2" {
		t.Errorf("Expected metadata['key2'] = 'value2', got '%s'", metadata["key2"])
	}
}

func TestEndpoint(t *testing.T) {
	endpoint := service.NewEndpoint(
		"test-endpoint",
		SampleHandler,
		&TestRequest{},
		&TestResponse{},
	)

	if endpoint.Name() != "test-endpoint" {
		t.Errorf("Expected endpoint name 'test-endpoint', got '%s'", endpoint.Name())
	}

	if reflect.TypeOf(endpoint.Handler()) != reflect.TypeOf(SampleHandler) {
		t.Errorf("Handler type mismatch")
	}

	if endpoint.RequestType() != reflect.TypeOf(&TestRequest{}) {
		t.Errorf("Request type mismatch")
	}

	if endpoint.ResponseType() != reflect.TypeOf(&TestResponse{}) {
		t.Errorf("Response type mismatch")
	}
}

func TestEndpointMetadata(t *testing.T) {
	endpoint := service.NewEndpoint(
		"test-endpoint",
		SampleHandler,
		&TestRequest{},
		&TestResponse{},
	)

	endpoint.AddMetadata("key1", "value1")
	endpoint.AddMetadata("key2", "value2")

	metadata := endpoint.Metadata()
	if len(metadata) != 2 {
		t.Fatalf("Expected 2 metadata entries, got %d", len(metadata))
	}

	if metadata["key1"] != "value1" {
		t.Errorf("Expected metadata['key1'] = 'value1', got '%s'", metadata["key1"])
	}

	if metadata["key2"] != "value2" {
		t.Errorf("Expected metadata['key2'] = 'value2', got '%s'", metadata["key2"])
	}
}

func TestMiddlewareChain(t *testing.T) {
	// Create middleware that adds values to a slice
	var calls []string

	middleware1 := func(next service.Handler) service.Handler {
		return func(ctx context.Context, req interface{}) (interface{}, error) {
			calls = append(calls, "before1")
			resp, err := next(ctx, req)
			calls = append(calls, "after1")
			return resp, err
		}
	}

	middleware2 := func(next service.Handler) service.Handler {
		return func(ctx context.Context, req interface{}) (interface{}, error) {
			calls = append(calls, "before2")
			resp, err := next(ctx, req)
			calls = append(calls, "after2")
			return resp, err
		}
	}

	// Create a handler
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		calls = append(calls, "handler")
		return "response", nil
	}

	// Chain the middleware
	chain := service.Chain(middleware1, middleware2)
	wrappedHandler := chain(handler)

	// Call the wrapped handler
	_, _ = wrappedHandler(context.Background(), "request")

	// Check the call order
	expected := []string{"before1", "before2", "handler", "after2", "after1"}
	if !reflect.DeepEqual(calls, expected) {
		t.Errorf("Expected call order %v, got %v", expected, calls)
	}
}
