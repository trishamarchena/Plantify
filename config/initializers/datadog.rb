require 'ddtrace'

Datadog.configure do |c|
  # This will activate auto-instrumentation for Rails
  c.use :rails, log_injection: true
  c.tracer sampler: Datadog::PrioritySampler.new(
    post_sampler: Datadog::Sampling::RuleSampler.new(
        [
            # Sample all 'servicedd' traces at 80.00%:
            Datadog::Sampling::SimpleRule.new(service: 'servicedd', sample_rate: 0.8000)
        ]
    )
    )

end