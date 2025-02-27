// pkg/log/log.go
package log

import (
	"fmt"
	"io"
	"os"
	"time"
)

// Level represents a log level
type Level int

const (
	// Debug level
	Debug Level = iota
	// Info level
	Info
	// Warn level
	Warn
	// Error level
	Error
	// Fatal level
	Fatal
)

// Logger represents a logger
type Logger interface {
	// Debug logs a debug message
	Debug(format string, args ...interface{})

	// Info logs an info message
	Info(format string, args ...interface{})

	// Warn logs a warning message
	Warn(format string, args ...interface{})

	// Error logs an error message
	Error(format string, args ...interface{})

	// Fatal logs a fatal message and exits
	Fatal(format string, args ...interface{})

	// WithField adds a field to the logger
	WithField(key string, value interface{}) Logger

	// WithFields adds multiple fields to the logger
	WithFields(fields map[string]interface{}) Logger

	// SetOutput sets the output writer
	SetOutput(out io.Writer)

	// SetLevel sets the log level
	SetLevel(level Level)
}

// defaultLogger is a simple logger implementation
type defaultLogger struct {
	level  Level
	out    io.Writer
	fields map[string]interface{}
}

// NewLogger creates a new logger
func NewLogger() Logger {
	return &defaultLogger{
		level:  Info,
		out:    os.Stdout,
		fields: make(map[string]interface{}),
	}
}

// SetLevel sets the log level
func (l *defaultLogger) SetLevel(level Level) {
	l.level = level
}

// SetOutput sets the output writer
func (l *defaultLogger) SetOutput(out io.Writer) {
	l.out = out
}

// Debug logs a debug message
func (l *defaultLogger) Debug(format string, args ...interface{}) {
	if l.level <= Debug {
		l.log("DEBUG", format, args...)
	}
}

// Info logs an info message
func (l *defaultLogger) Info(format string, args ...interface{}) {
	if l.level <= Info {
		l.log("INFO", format, args...)
	}
}

// Warn logs a warning message
func (l *defaultLogger) Warn(format string, args ...interface{}) {
	if l.level <= Warn {
		l.log("WARN", format, args...)
	}
}

// Error logs an error message
func (l *defaultLogger) Error(format string, args ...interface{}) {
	if l.level <= Error {
		l.log("ERROR", format, args...)
	}
}

// Fatal logs a fatal message and exits
func (l *defaultLogger) Fatal(format string, args ...interface{}) {
	if l.level <= Fatal {
		l.log("FATAL", format, args...)
		os.Exit(1)
	}
}

// WithField adds a field to the logger
func (l *defaultLogger) WithField(key string, value interface{}) Logger {
	newLogger := &defaultLogger{
		level:  l.level,
		out:    l.out,
		fields: make(map[string]interface{}),
	}

	// Copy existing fields
	for k, v := range l.fields {
		newLogger.fields[k] = v
	}

	// Add new field
	newLogger.fields[key] = value

	return newLogger
}

// WithFields adds multiple fields to the logger
func (l *defaultLogger) WithFields(fields map[string]interface{}) Logger {
	newLogger := &defaultLogger{
		level:  l.level,
		out:    l.out,
		fields: make(map[string]interface{}),
	}

	// Copy existing fields
	for k, v := range l.fields {
		newLogger.fields[k] = v
	}

	// Add new fields
	for k, v := range fields {
		newLogger.fields[k] = v
	}

	return newLogger
}

// log logs a message
func (l *defaultLogger) log(level, format string, args ...interface{}) {
	// Format the message
	msg := fmt.Sprintf(format, args...)

	// Format the fields
	fields := ""
	if len(l.fields) > 0 {
		fields = " "
		for k, v := range l.fields {
			fields += fmt.Sprintf("%s=%v ", k, v)
		}
	}

	// Format the log line
	line := fmt.Sprintf("[%s] %s %s%s\n", time.Now().Format("2006-01-02 15:04:05"), level, msg, fields)

	// Write to output
	fmt.Fprint(l.out, line)
}
