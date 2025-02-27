// pkg/registry/memory/memory_test.go
package memory_test

import (
	"context"
	"fmt"
	"testing"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/registry"
	"github.com/HeZephyr/GoMicroKit/pkg/registry/memory"
)

func TestRegistryRegisterAndGetService(t *testing.T) {
	reg := memory.NewRegistry()
	ctx := context.Background()

	// Create a test service
	svc := &registry.ServiceInfo{
		ID:        "test-service-1",
		Name:      "test-service",
		Version:   "1.0.0",
		Address:   "localhost",
		Port:      8080,
		Metadata:  map[string]string{"key": "value"},
		Endpoints: []string{"endpoint1", "endpoint2"},
	}

	// Register the service
	err := reg.Register(ctx, svc)
	if err != nil {
		t.Fatalf("Failed to register service: %v", err)
	}

	// Get the service
	services, err := reg.GetService(ctx, "test-service")
	if err != nil {
		t.Fatalf("Failed to get service: %v", err)
	}

	if len(services) != 1 {
		t.Fatalf("Expected 1 service, got %d", len(services))
	}

	if services[0].ID != "test-service-1" {
		t.Errorf("Expected service ID 'test-service-1', got '%s'", services[0].ID)
	}

	if services[0].Name != "test-service" {
		t.Errorf("Expected service name 'test-service', got '%s'", services[0].Name)
	}
}

func TestRegistryDeregister(t *testing.T) {
	reg := memory.NewRegistry()
	ctx := context.Background()

	// Create a test service
	svc := &registry.ServiceInfo{
		ID:        "test-service-1",
		Name:      "test-service",
		Version:   "1.0.0",
		Address:   "localhost",
		Port:      8080,
		Metadata:  map[string]string{"key": "value"},
		Endpoints: []string{"endpoint1", "endpoint2"},
	}

	// Register the service
	err := reg.Register(ctx, svc)
	if err != nil {
		t.Fatalf("Failed to register service: %v", err)
	}

	// Deregister the service
	err = reg.Deregister(ctx, svc)
	if err != nil {
		t.Fatalf("Failed to deregister service: %v", err)
	}

	// Get the service
	services, err := reg.GetService(ctx, "test-service")
	if err != nil {
		t.Fatalf("Failed to get service: %v", err)
	}

	if len(services) != 0 {
		t.Errorf("Expected 0 services, got %d", len(services))
	}
}

func TestRegistryWatch(t *testing.T) {
	reg := memory.NewRegistry()
	ctx := context.Background()

	// First register an initial service to ensure there's data
	initialSvc := &registry.ServiceInfo{
		ID:        "test-service-initial",
		Name:      "test-service",
		Version:   "1.0.0",
		Address:   "localhost",
		Port:      8080,
		Metadata:  map[string]string{"key": "initial"},
		Endpoints: []string{"endpoint1", "endpoint2"},
	}

	// Register the initial service
	err := reg.Register(ctx, initialSvc)
	if err != nil {
		t.Fatalf("Failed to register initial service: %v", err)
	}

	// Create a watcher
	watcher, err := reg.Watch(ctx, "test-service")
	if err != nil {
		t.Fatalf("Failed to create watcher: %v", err)
	}

	// Create channels to receive Next() results
	resultCh := make(chan []*registry.ServiceInfo, 1)
	errCh := make(chan error, 1)

	// Call Next() in a goroutine
	go func() {
		services, err := watcher.Next()
		if err != nil {
			errCh <- err
			return
		}
		resultCh <- services
	}()

	// Wait for the initial service list
	select {
	case services := <-resultCh:
		if len(services) != 1 {
			t.Fatalf("Expected 1 initial service, got %d", len(services))
		}

		// Call Next() again to wait for new updates
		go func() {
			services, err := watcher.Next()
			if err != nil {
				errCh <- err
				return
			}
			resultCh <- services
		}()

	case err := <-errCh:
		t.Fatalf("Error from initial watcher: %v", err)

	case <-time.After(500 * time.Millisecond):
		t.Fatalf("Timed out waiting for initial service")
	}

	// Register a new service
	newSvc := &registry.ServiceInfo{
		ID:        "test-service-1",
		Name:      "test-service",
		Version:   "1.0.0",
		Address:   "localhost",
		Port:      8081,
		Metadata:  map[string]string{"key": "value"},
		Endpoints: []string{"endpoint1", "endpoint2"},
	}

	err = reg.Register(ctx, newSvc)
	if err != nil {
		t.Fatalf("Failed to register new service: %v", err)
	}

	// Wait for the service update
	select {
	case services := <-resultCh:
		// Should have two services: the initial one and the new one
		if len(services) != 2 {
			t.Fatalf("Expected 2 services after update, got %d", len(services))
		}

		// Verify the new service is in the list
		found := false
		for _, s := range services {
			if s.ID == "test-service-1" {
				found = true
				break
			}
		}

		if !found {
			t.Errorf("New service with ID 'test-service-1' not found in update")
		}

	case err := <-errCh:
		t.Fatalf("Error from watcher: %v", err)

	case <-time.After(1 * time.Second):
		t.Fatalf("Timed out waiting for service update")
	}

	// Stop the watcher
	err = watcher.Stop()
	if err != nil {
		t.Fatalf("Failed to stop watcher: %v", err)
	}
}

func TestRegistryMultipleServices(t *testing.T) {
	reg := memory.NewRegistry()
	ctx := context.Background()

	// Register multiple services
	for i := 1; i <= 3; i++ {
		svc := &registry.ServiceInfo{
			ID:        fmt.Sprintf("test-service-%d", i),
			Name:      "test-service",
			Version:   "1.0.0",
			Address:   "localhost",
			Port:      8080 + i,
			Metadata:  map[string]string{"instance": fmt.Sprintf("%d", i)},
			Endpoints: []string{"endpoint1", "endpoint2"},
		}
		err := reg.Register(ctx, svc)
		if err != nil {
			t.Fatalf("Failed to register service %d: %v", i, err)
		}
	}

	// Get the services
	services, err := reg.GetService(ctx, "test-service")
	if err != nil {
		t.Fatalf("Failed to get services: %v", err)
	}

	if len(services) != 3 {
		t.Fatalf("Expected 3 services, got %d", len(services))
	}
}
