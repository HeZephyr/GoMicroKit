// pkg/log/log_test.go
package log_test

import (
	"bytes"
	"strings"
	"testing"

	"github.com/HeZephyr/GoMicroKit/pkg/log"
)

func TestLogLevels(t *testing.T) {
	var buf bytes.Buffer
	logger := log.NewLogger()
	logger.SetOutput(&buf)

	// Test info level
	buf.Reset()
	logger.Info("Info message")
	if !strings.Contains(buf.String(), "INFO Info message") {
		t.Errorf("Expected log to contain 'INFO Info message', got '%s'", buf.String())
	}

	// Test error level
	buf.Reset()
	logger.Error("Error message")
	if !strings.Contains(buf.String(), "ERROR Error message") {
		t.Errorf("Expected log to contain 'ERROR Error message', got '%s'", buf.String())
	}

	// Test warning level
	buf.Reset()
	logger.Warn("Warning message")
	if !strings.Contains(buf.String(), "WARN Warning message") {
		t.Errorf("Expected log to contain 'WARN Warning message', got '%s'", buf.String())
	}

	// Test debug level
	buf.Reset()
	logger.SetLevel(log.Debug)
	logger.Debug("Debug message")
	if !strings.Contains(buf.String(), "DEBUG Debug message") {
		t.Errorf("Expected log to contain 'DEBUG Debug message', got '%s'", buf.String())
	}
}

func TestLogWithFields(t *testing.T) {
	var buf bytes.Buffer
	logger := log.NewLogger()
	logger.SetOutput(&buf)

	// Test with single field
	buf.Reset()
	logger.WithField("key", "value").Info("Message with field")
	if !strings.Contains(buf.String(), "key=value") {
		t.Errorf("Expected log to contain 'key=value', got '%s'", buf.String())
	}

	// Test with multiple fields
	buf.Reset()
	logger.WithFields(map[string]interface{}{
		"key1": "value1",
		"key2": 42,
	}).Info("Message with fields")

	if !strings.Contains(buf.String(), "key1=value1") {
		t.Errorf("Expected log to contain 'key1=value1', got '%s'", buf.String())
	}

	if !strings.Contains(buf.String(), "key2=42") {
		t.Errorf("Expected log to contain 'key2=42', got '%s'", buf.String())
	}
}

func TestLogFormatting(t *testing.T) {
	var buf bytes.Buffer
	logger := log.NewLogger()
	logger.SetOutput(&buf)

	// Test formatting
	buf.Reset()
	logger.Info("Hello %s", "world")
	if !strings.Contains(buf.String(), "Hello world") {
		t.Errorf("Expected log to contain 'Hello world', got '%s'", buf.String())
	}
}
