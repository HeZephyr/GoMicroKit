// pkg/registry/registry.go
package registry

import (
    "context"
    "fmt"
    "time"
    
    "github.com/HeZephyr/GoMicroKit/pkg/service"
)

// ServiceInfo contains information about a service instance
type ServiceInfo struct {
    ID        string
    Name      string
    Version   string
    Address   string
    Port      int
    Metadata  map[string]string
    Endpoints []string
}

// Registry represents a service registry
type Registry interface {
    // Register registers a service with the registry
    Register(ctx context.Context, svc *ServiceInfo) error
    
    // Deregister removes a service from the registry
    Deregister(ctx context.Context, svc *ServiceInfo) error
    
    // GetService returns all instances of a service
    GetService(ctx context.Context, name string) ([]*ServiceInfo, error)
    
    // Watch creates a watcher for a service
    Watch(ctx context.Context, name string) (Watcher, error)
}

// Watcher watches for changes in service instances
type Watcher interface {
    // Next blocks until a change occurs
    Next() ([]*ServiceInfo, error)
    
    // Stop stops the watcher
    Stop() error
}

// RegisterOptions contains options for service registration
type RegisterOptions struct {
    TTL           time.Duration
    CheckInterval time.Duration
    CheckTimeout  time.Duration
}

// DefaultRegisterOptions returns default register options
func DefaultRegisterOptions() RegisterOptions {
    return RegisterOptions{
        TTL:           time.Second * 30,
        CheckInterval: time.Second * 10,
        CheckTimeout:  time.Second * 5,
    }
}

// FromService creates a ServiceInfo from a Service
func FromService(svc service.Service, address string, port int) *ServiceInfo {
    endpoints := make([]string, len(svc.Endpoints()))
    for i, ep := range svc.Endpoints() {
        endpoints[i] = ep.Name()
    }
    
    return &ServiceInfo{
        ID:        generateID(svc.Name(), address, port),
        Name:      svc.Name(),
        Version:   svc.Version(),
        Address:   address,
        Port:      port,
        Metadata:  svc.Metadata(),
        Endpoints: endpoints,
    }
}

// Helper function to generate a unique service ID
func generateID(name, address string, port int) string {
    return fmt.Sprintf("%s-%s-%d", name, address, port)
}