package log_test

import (
	"bytes"
	"testing"

	"github.com/HeZephyr/GoMicroKit/pkg/log"
)

// BenchmarkLogInfo benchmarks logging info messages
func BenchmarkLogInfo(b *testing.B) {
	var buf bytes.Buffer
	logger := log.NewLogger()
	logger.SetOutput(&buf)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		logger.Info("This is a benchmark info message")
	}
}

// BenchmarkLogWithField benchmarks logging with a single field
func BenchmarkLogWithField(b *testing.B) {
	var buf bytes.Buffer
	logger := log.NewLogger()
	logger.SetOutput(&buf)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		logger.WithField("key", "value").Info("Message with field")
	}
}

// BenchmarkLogWithFields benchmarks logging with multiple fields
func BenchmarkLogWithFields(b *testing.B) {
	var buf bytes.Buffer
	logger := log.NewLogger()
	logger.SetOutput(&buf)

	fields := map[string]interface{}{
		"key1": "value1",
		"key2": 42,
		"key3": true,
		"key4": 3.14,
	}

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		logger.WithFields(fields).Info("Message with multiple fields")
	}
}

// BenchmarkLogFormatting benchmarks string formatting in logs
func BenchmarkLogFormatting(b *testing.B) {
	var buf bytes.Buffer
	logger := log.NewLogger()
	logger.SetOutput(&buf)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		logger.Info("Formatted %s with %d values and %.2f precision", "message", 42, 3.14159)
	}
}
