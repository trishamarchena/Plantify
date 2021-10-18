require 'ddtrace'

Datadog.configure do |c|
  # This will activate auto-instrumentation for Rais
  c.use :rails, log_injection: true

end