// pkg/service/base_service.go
package service

import "reflect"

// BaseService provides a basic implementation of the Service interface
type BaseService struct {
	name      string
	version   string
	metadata  map[string]string
	endpoints []Endpoint
}

// NewService creates a new BaseService
func NewService(name, version string) *BaseService {
	return &BaseService{
		name:      name,
		version:   version,
		metadata:  make(map[string]string),
		endpoints: make([]Endpoint, 0),
	}
}

func (s *BaseService) Name() string {
	return s.name
}

func (s *BaseService) Version() string {
	return s.version
}

func (s *BaseService) Metadata() map[string]string {
	return s.metadata
}

func (s *BaseService) Endpoints() []Endpoint {
	return s.endpoints
}

// AddEndpoint adds an endpoint to the service
func (s *BaseService) AddEndpoint(e Endpoint) {
	s.endpoints = append(s.endpoints, e)
}

// AddMetadata adds a metadata key-value pair
func (s *BaseService) AddMetadata(key, value string) {
	s.metadata[key] = value
}

// BaseEndpoint provides a basic implementation of the Endpoint interface
type BaseEndpoint struct {
	name         string
	handler      any
	requestType  reflect.Type
	responseType reflect.Type
	metadata     map[string]string
}

// NewEndpoint creates a new BaseEndpoint
func NewEndpoint(name string, handler any, req, resp any) *BaseEndpoint {
	return &BaseEndpoint{
		name:         name,
		handler:      handler,
		requestType:  reflect.TypeOf(req),
		responseType: reflect.TypeOf(resp),
		metadata:     make(map[string]string),
	}
}

func (e *BaseEndpoint) Name() string {
	return e.name
}

func (e *BaseEndpoint) Handler() any {
	return e.handler
}

func (e *BaseEndpoint) RequestType() reflect.Type {
	return e.requestType
}

func (e *BaseEndpoint) ResponseType() reflect.Type {
	return e.responseType
}

func (e *BaseEndpoint) Metadata() map[string]string {
	return e.metadata
}

// AddMetadata adds a metadata key-value pair
func (e *BaseEndpoint) AddMetadata(key, value string) {
	e.metadata[key] = value
}
