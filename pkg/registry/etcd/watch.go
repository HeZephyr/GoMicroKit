// pkg/registry/etcd/watcher.go
package etcd

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/HeZephyr/GoMicroKit/pkg/registry"
	clientv3 "go.etcd.io/etcd/client/v3"
)

// etcdWatcher watches for changes in etcd
type etcdWatcher struct {
	client    *clientv3.Client
	watchChan clientv3.WatchChan
	prefix    string
	ctx       context.Context
}

// Next blocks until a change occurs
func (w *etcdWatcher) Next() ([]*registry.ServiceInfo, error) {
	for {
		select {
		case <-w.ctx.Done():
			return nil, w.ctx.Err()
		case watchResp := <-w.watchChan:
			if watchResp.Canceled {
				return nil, fmt.Errorf("watch canceled")
			}

			if err := watchResp.Err(); err != nil {
				return nil, err
			}

			// Get all current services
			resp, err := w.client.Get(w.ctx, w.prefix, clientv3.WithPrefix())
			if err != nil {
				return nil, fmt.Errorf("failed to get services: %w", err)
			}

			services := make([]*registry.ServiceInfo, 0, resp.Count)
			for _, kv := range resp.Kvs {
				var svc registry.ServiceInfo
				if err := json.Unmarshal(kv.Value, &svc); err != nil {
					continue // Skip invalid entries
				}
				services = append(services, &svc)
			}

			return services, nil
		}
	}
}

// Stop stops the watcher
func (w *etcdWatcher) Stop() error {
	// Cancelling the context will stop the watch
	return nil
}