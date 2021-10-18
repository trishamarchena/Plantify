require 'ddtrace'

Datadog.configure do |c|
  # This will activate auto-instrumentation for Rais
  c.use :rails, log_injection: true
  c.tracer sampler: Datadog::PrioritySampler.new(
    post_sampler: Datadog::Sampling::RuleSampler.new(
        [
            # Sample all 'servicedd' traces at 100.00%:
            Datadog::Sampling::SimpleRule.new(service: 'servicedd', sample_rate: 1.000)
        ]
    )
    )

end