// pkg/registry/memory/memory.go
package memory

import (
	"context"
	"sync"

	"github.com/HeZephyr/GoMicroKit/pkg/registry"
)

// Registry is an in-memory registry (useful for testing)
type Registry struct {
	sync.RWMutex
	services map[string][]*registry.ServiceInfo
	watchers map[string][]chan []*registry.ServiceInfo
}

// NewRegistry creates a new in-memory registry
func NewRegistry() *Registry {
	return &Registry{
		services: make(map[string][]*registry.ServiceInfo),
		watchers: make(map[string][]chan []*registry.ServiceInfo),
	}
}

// Register registers a service
func (r *Registry) Register(ctx context.Context, svc *registry.ServiceInfo) error {
	r.Lock()
	defer r.Unlock()

	services, ok := r.services[svc.Name]
	if !ok {
		r.services[svc.Name] = []*registry.ServiceInfo{svc}
	} else {
		// Check if service already exists
		var exists bool
		for i, s := range services {
			if s.ID == svc.ID {
				// Update existing service
				services[i] = svc
				exists = true
				break
			}
		}

		// Add new service if it doesn't exist
		if !exists {
			r.services[svc.Name] = append(r.services[svc.Name], svc)
		}
	}

	// Notify watchers
	r.notifyWatchers(svc.Name)

	return nil
}

// Deregister removes a service
func (r *Registry) Deregister(ctx context.Context, svc *registry.ServiceInfo) error {
	r.Lock()
	defer r.Unlock()

	services, ok := r.services[svc.Name]
	if !ok {
		return nil
	}

	var newServices []*registry.ServiceInfo
	for _, s := range services {
		if s.ID != svc.ID {
			newServices = append(newServices, s)
		}
	}

	if len(newServices) == 0 {
		delete(r.services, svc.Name)
	} else {
		r.services[svc.Name] = newServices
	}

	// Notify watchers
	r.notifyWatchers(svc.Name)

	return nil
}

// GetService returns all instances of a service
func (r *Registry) GetService(ctx context.Context, name string) ([]*registry.ServiceInfo, error) {
	r.RLock()
	defer r.RUnlock()

	services, ok := r.services[name]
	if !ok {
		return []*registry.ServiceInfo{}, nil
	}

	// Return a copy to prevent external modification
	result := make([]*registry.ServiceInfo, len(services))
	copy(result, services)

	return result, nil
}

// Watch creates a watcher for a service
func (r *Registry) Watch(ctx context.Context, name string) (registry.Watcher, error) {
	ch := make(chan []*registry.ServiceInfo, 10)

	r.Lock()
	if _, ok := r.watchers[name]; !ok {
		r.watchers[name] = []chan []*registry.ServiceInfo{ch}
	} else {
		r.watchers[name] = append(r.watchers[name], ch)
	}
	r.Unlock()

	// Send initial service list
	services, _ := r.GetService(ctx, name)
	ch <- services

	return &memoryWatcher{
		registry: r,
		name:     name,
		ch:       ch,
	}, nil
}

// notifyWatchers notifies all watchers of a service
func (r *Registry) notifyWatchers(name string) {
	services, ok := r.services[name]
	if !ok {
		services = []*registry.ServiceInfo{}
	}

	watchers, ok := r.watchers[name]
	if !ok {
		return
	}

	for _, ch := range watchers {
		select {
		case ch <- services:
		default:
			// Channel is full, skip this update
		}
	}
}

// memoryWatcher implements the Watcher interface
type memoryWatcher struct {
	registry *Registry
	name     string
	ch       chan []*registry.ServiceInfo
}

// Next blocks until a change occurs
func (w *memoryWatcher) Next() ([]*registry.ServiceInfo, error) {
	services := <-w.ch
	return services, nil
}

// Stop stops the watcher
func (w *memoryWatcher) Stop() error {
	w.registry.Lock()
	defer w.registry.Unlock()

	watchers, ok := w.registry.watchers[w.name]
	if !ok {
		return nil
	}

	var newWatchers []chan []*registry.ServiceInfo
	for _, ch := range watchers {
		if ch != w.ch {
			newWatchers = append(newWatchers, ch)
		}
	}

	if len(newWatchers) == 0 {
		delete(w.registry.watchers, w.name)
	} else {
		w.registry.watchers[w.name] = newWatchers
	}

	close(w.ch)

	return nil
}
