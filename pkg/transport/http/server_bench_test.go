package http_test

import (
	"bytes"
	"context"
	"io"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/HeZephyr/GoMicroKit/pkg/service"
	microhttp "github.com/HeZephyr/GoMicroKit/pkg/transport/http"
)

// BenchRequest is a benchmark request type
type BenchRequest struct {
	Name string `json:"name"`
}

// BenchResponse is a benchmark response type
type BenchResponse struct {
	Message string `json:"message"`
}

// BenchHandler is a benchmark handler function
func BenchHandler(ctx context.Context, req *BenchRequest) (*BenchResponse, error) {
	return &BenchResponse{Message: "Hello, " + req.Name}, nil
}

// BenchmarkServerRegister benchmarks registering a service with the server
func BenchmarkServerRegister(b *testing.B) {
	for i := 0; i < b.N; i++ {
		svc := service.NewService("bench-service", "1.0.0")
		endpoint := service.NewEndpoint(
			"bench-endpoint",
			BenchHandler,
			&BenchRequest{},
			&BenchResponse{},
		)
		svc.AddEndpoint(endpoint)

		server := microhttp.NewServer()
		server.Register(svc)
	}
}

// BenchmarkJSONCodecEncode benchmarks JSON encoding
func BenchmarkJSONCodecEncode(b *testing.B) {
	codec := &microhttp.JSONCodec{}
	resp := BenchResponse{Message: "Hello, World!"}

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		var buf bytes.Buffer
		codec.Encode(context.Background(), &buf, resp)
	}
}

// BenchmarkJSONCodecDecode benchmarks JSON decoding
func BenchmarkJSONCodecDecode(b *testing.B) {
	codec := &microhttp.JSONCodec{}
	data := []byte(`{"name":"Benchmark"}`)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		var req BenchRequest
		codec.Decode(context.Background(), bytes.NewReader(data), &req)
	}
}

// BenchmarkHTTPRequestHandling benchmarks the full HTTP request handling flow
func BenchmarkHTTPRequestHandling(b *testing.B) {
	// Setup server
	svc := service.NewService("bench-service", "1.0.0")
	endpoint := service.NewEndpoint(
		"bench-endpoint",
		BenchHandler,
		&BenchRequest{},
		&BenchResponse{},
	)
	svc.AddEndpoint(endpoint)

	server := microhttp.NewServer()
	server.Register(svc)

	// Create a test server
	ts := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		server.ServeHTTP(w, r)
	}))
	defer ts.Close()

	// Prepare request data
	reqBody := []byte(`{"name":"Benchmark"}`)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		req, _ := http.NewRequest("POST", ts.URL+"/bench-service/bench-endpoint", bytes.NewBuffer(reqBody))
		req.Header.Set("Content-Type", "application/json")

		resp, err := http.DefaultClient.Do(req)
		if err != nil {
			b.Fatal(err)
		}

		_, err = io.ReadAll(resp.Body)
		resp.Body.Close()
		if err != nil {
			b.Fatal(err)
		}
	}
}
