// pkg/registry/etcd/etcd.go
package etcd

import (
	"context"
	"encoding/json"
	"fmt"
	"path"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/registry"
	clientv3 "go.etcd.io/etcd/client/v3"
)

const (
	// DefaultPrefix is the default prefix for service keys
	DefaultPrefix = "/services/"
)

// Registry is an etcd registry
type Registry struct {
	client  *clientv3.Client
	options registry.RegisterOptions
	prefix  string
}

// Option is a function that configures the registry
type Option func(*options)

// options contains registry options
type options struct {
	registerOptions registry.RegisterOptions
	prefix          string
}

// WithPrefix sets the key prefix
func WithPrefix(prefix string) Option {
	return func(o *options) {
		o.prefix = prefix
	}
}

// WithTTL sets the service TTL
func WithTTL(ttl time.Duration) Option {
	return func(o *options) {
		o.registerOptions.TTL = ttl
	}
}

// WithCheckInterval sets the check interval
func WithCheckInterval(interval time.Duration) Option {
	return func(o *options) {
		o.registerOptions.CheckInterval = interval
	}
}

// NewRegistry creates a new etcd registry
func NewRegistry(endpoints []string, opts ...Option) (*Registry, error) {
	// Default options
	options := &options{
		registerOptions: registry.DefaultRegisterOptions(),
		prefix:          DefaultPrefix,
	}

	// Apply option functions
	for _, o := range opts {
		o(options)
	}

	// Create etcd client
	client, err := clientv3.New(clientv3.Config{
		Endpoints:   endpoints,
		DialTimeout: 5 * time.Second,
	})
	if err != nil {
		return nil, fmt.Errorf("failed to create etcd client: %w", err)
	}

	return &Registry{
		client:  client,
		options: options.registerOptions,
		prefix:  options.prefix,
	}, nil
}

// Register registers a service with etcd
func (r *Registry) Register(ctx context.Context, svc *registry.ServiceInfo) error {
	// Create lease
	lease, err := r.client.Grant(ctx, int64(r.options.TTL.Seconds()))
	if err != nil {
		return fmt.Errorf("failed to create lease: %w", err)
	}

	// Keep lease alive
	keepAliveCh, err := r.client.KeepAlive(ctx, lease.ID)
	if err != nil {
		return fmt.Errorf("failed to keep lease alive: %w", err)
	}

	// Handle keep alive responses in a goroutine
	go func() {
		for {
			_, ok := <-keepAliveCh
			if !ok {
				// Channel closed, lease is done
				return
			}
		}
	}()

	// Marshal service info
	data, err := json.Marshal(svc)
	if err != nil {
		return fmt.Errorf("failed to marshal service info: %w", err)
	}

	// Create key based on service ID
	key := path.Join(r.prefix, svc.Name, svc.ID)

	// Put service info in etcd with lease
	_, err = r.client.Put(ctx, key, string(data), clientv3.WithLease(lease.ID))
	if err != nil {
		return fmt.Errorf("failed to register service: %w", err)
	}

	return nil
}

// Deregister removes a service from etcd
func (r *Registry) Deregister(ctx context.Context, svc *registry.ServiceInfo) error {
	// Delete service from etcd
	key := path.Join(r.prefix, svc.Name, svc.ID)
	_, err := r.client.Delete(ctx, key)
	if err != nil {
		return fmt.Errorf("failed to deregister service: %w", err)
	}

	return nil
}

// GetService returns all instances of a service
func (r *Registry) GetService(ctx context.Context, name string) ([]*registry.ServiceInfo, error) {
	// Get all services with the given name
	prefix := path.Join(r.prefix, name)
	resp, err := r.client.Get(ctx, prefix, clientv3.WithPrefix())
	if err != nil {
		return nil, fmt.Errorf("failed to get services: %w", err)
	}

	if resp.Count == 0 {
		return []*registry.ServiceInfo{}, nil
	}

	// Unmarshal services
	services := make([]*registry.ServiceInfo, 0, resp.Count)
	for _, kv := range resp.Kvs {
		var svc registry.ServiceInfo
		if err := json.Unmarshal(kv.Value, &svc); err != nil {
			return nil, fmt.Errorf("failed to unmarshal service info: %w", err)
		}
		services = append(services, &svc)
	}

	return services, nil
}

// Watch creates a watcher for a service
func (r *Registry) Watch(ctx context.Context, name string) (registry.Watcher, error) {
	// Create a watcher
	prefix := path.Join(r.prefix, name)
	watchChan := r.client.Watch(ctx, prefix, clientv3.WithPrefix())

	return &etcdWatcher{
		client:    r.client,
		watchChan: watchChan,
		prefix:    prefix,
		ctx:       ctx,
	}, nil
}

// Close closes the registry
func (r *Registry) Close() error {
	return r.client.Close()
}