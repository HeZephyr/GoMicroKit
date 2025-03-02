// examples/http/client.go
package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"time"

	httptransport "github.com/HeZephyr/GoMicroKit/pkg/transport/http"
)

// Request and response types (same as server)
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

func main() {
	// Parse command-line flags
	nameFlag := flag.String("name", "GoMicroKit User", "Name to send in greeting request")
	detailFlag := flag.Bool("detail", true, "Request detailed info")
	timeoutFlag := flag.Duration("timeout", 5*time.Second, "Request timeout")
	serverAddr := flag.String("server", "http://localhost:8080", "Server address")
	flag.Parse()

	// Create HTTP client with timeout
	client := httptransport.NewClient(
		"greeter-client",
		*serverAddr,
		httptransport.WithTimeout(*timeoutFlag),
	)

	// Create context with timeout
	ctx, cancel := context.WithTimeout(context.Background(), *timeoutFlag)
	defer cancel()

	// Call greet endpoint
	fmt.Println("Calling greet endpoint...")
	greetReq := &GreetRequest{Name: *nameFlag}
	greetResp := &GreetResponse{}

	err := client.Call(ctx, "greeter", "greet", greetReq, greetResp)
	if err != nil {
		log.Fatalf("Greeting failed: %v", err)
	}

	fmt.Printf("Greeting response: %s\n", greetResp.Message)
	fmt.Printf("Server time: %s\n", greetResp.Time.Format(time.RFC3339))
	fmt.Printf("Server ID: %s\n", greetResp.ServerID)
	fmt.Println()

	// Call info endpoint
	fmt.Println("Calling info endpoint...")
	infoReq := &InfoRequest{Detail: *detailFlag}
	infoResp := &InfoResponse{}

	err = client.Call(ctx, "greeter", "info", infoReq, infoResp)
	if err != nil {
		log.Fatalf("Info request failed: %v", err)
	}

	fmt.Printf("Service version: %s\n", infoResp.Version)
	fmt.Printf("Service uptime: %s\n", infoResp.Uptime)

	if infoResp.BuildInfo != nil {
		fmt.Println("\nBuild Information:")
		for k, v := range infoResp.BuildInfo {
			fmt.Printf("  %s: %s\n", k, v)
		}
	}
}