// examples/unit/transport/http/server/main.go
package main

import (
	"context"
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/HeZephyr/GoMicroKit/pkg/service"
	httptransport "github.com/HeZephyr/GoMicroKit/pkg/transport/http"
)

// Request and response types
type GreetRequest struct {
	Name string `json:"name"`
}

type GreetResponse struct {
	Message  string    `json:"message"`
	Time     time.Time `json:"time"`
	ServerID string    `json:"server_id"`
}

type InfoRequest struct {
	Detail bool `json:"detail"`
}

type InfoResponse struct {
	Version   string            `json:"version"`
	Uptime    string            `json:"uptime"`
	BuildInfo map[string]string `json:"build_info,omitempty"`
}

// GreeterService implements a simple greeting service
type GreeterService struct {
	*service.BaseService
	serverID  string
	startTime time.Time
}

// NewGreeterService creates a new greeter service
func NewGreeterService() *GreeterService {
	svc := &GreeterService{
		BaseService: service.NewService("greeter", "1.0.0"),
		serverID:    generateServerID(),
		startTime:   time.Now(),
	}

	// Register endpoints
	svc.registerEndpoints()
	return svc
}

// Generate a pseudo-random server ID
func generateServerID() string {
	return "srv-" + time.Now().Format("20060102-150405")
}

// Register all service endpoints
func (s *GreeterService) registerEndpoints() {
	// Greet endpoint
	greetEndpoint := service.NewEndpoint(
		"greet",
		func(ctx context.Context, req *GreetRequest) (*GreetResponse, error) {
			log.Printf("Greeting %s", req.Name)
			return &GreetResponse{
				Message:  "Hello, " + req.Name + "!",
				Time:     time.Now(),
				ServerID: s.serverID,
			}, nil
		},
		&GreetRequest{},
		&GreetResponse{},
	)
	s.AddEndpoint(greetEndpoint)

	// Info endpoint
	infoEndpoint := service.NewEndpoint(
		"info",
		func(ctx context.Context, req *InfoRequest) (*InfoResponse, error) {
			resp := &InfoResponse{
				Version: s.Version(),
				Uptime:  time.Since(s.startTime).String(),
			}

			// Add build info for detailed requests
			if req.Detail {
				resp.BuildInfo = map[string]string{
					"go_version": "1.18.0",
					"os":         "linux",
					"arch":       "amd64",
					"build_date": "2023-04-15",
				}
			}
			return resp, nil
		},
		&InfoRequest{},
		&InfoResponse{},
	)
	s.AddEndpoint(infoEndpoint)
}

func main() {
	// Create HTTP server
	server := httptransport.NewServer()

	// Create and register our service
	svc := NewGreeterService()
	if err := server.Register(svc); err != nil {
		log.Fatalf("Failed to register service: %v", err)
	}

	// Add metadata to the service
	svc.AddMetadata("description", "A simple greeting service")
	svc.AddMetadata("owner", "GoMicroKit Team")

	// Start the server in a goroutine
	go func() {
		log.Println("Starting HTTP server on :8080")
		if err := server.Serve(":8080"); err != nil {
			log.Fatalf("Server failed: %v", err)
		}
	}()

	// Wait for interrupt signal
	signalCh := make(chan os.Signal, 1)
	signal.Notify(signalCh, syscall.SIGINT, syscall.SIGTERM)
	<-signalCh

	log.Println("Shutting down server...")
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()

	if err := server.Stop(ctx); err != nil {
		log.Fatalf("Server forced to shutdown: %v", err)
	}

	log.Println("Server gracefully stopped")
}
