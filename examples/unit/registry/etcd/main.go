// examples/unit/registry/etcd/main.go
package main

import (
	"context"
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/registry"
	"github.com/HeZephyr/GoMicroKit/pkg/registry/etcd"
	"github.com/HeZephyr/GoMicroKit/pkg/service"
)

func main() {
	// Create a service
	svc := service.NewService("example", "1.0.0")
	svc.AddMetadata("environment", "development")

	// Create a ServiceInfo
	serviceInfo := registry.FromService(svc, "localhost", 8080)

	// Create etcd registry
	reg, err := etcd.NewRegistry(
		[]string{"localhost:2379"},
		etcd.WithTTL(30*time.Second),
		etcd.WithPrefix("/services/"),
	)
	if err != nil {
		log.Fatalf("Failed to create registry: %v", err)
	}
	defer reg.Close()

	// Register the service
	ctx := context.Background()
	if err := reg.Register(ctx, serviceInfo); err != nil {
		log.Fatalf("Failed to register service: %v", err)
	}
	log.Printf("Service registered: %s/%s", serviceInfo.Name, serviceInfo.ID)

	// Create a watcher in a separate goroutine
	go func() {
		watcher, err := reg.Watch(ctx, "example")
		if err != nil {
			log.Printf("Failed to watch service: %v", err)
			return
		}

		for {
			services, err := watcher.Next()
			if err != nil {
				log.Printf("Watcher error: %v", err)
				break
			}

			log.Printf("Service change detected, instances: %d", len(services))
			for _, svc := range services {
				log.Printf("  - %s (%s:%d)", svc.ID, svc.Address, svc.Port)
			}
		}
	}()

	// Query for services
	go func() {
		for {
			services, err := reg.GetService(ctx, "example")
			if err != nil {
				log.Printf("Failed to get services: %v", err)
			} else {
				log.Printf("Found %d service instances", len(services))
			}
			time.Sleep(10 * time.Second)
		}
	}()

	// Wait for interrupt
	sig := make(chan os.Signal, 1)
	signal.Notify(sig, syscall.SIGINT, syscall.SIGTERM)
	<-sig

	// Deregister the service
	log.Printf("Deregistering service...")
	if err := reg.Deregister(ctx, serviceInfo); err != nil {
		log.Printf("Failed to deregister service: %v", err)
	}

	log.Printf("Exiting")
}
