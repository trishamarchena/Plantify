# config/initializers/datadog-tracer.rb
Datadog.configure do |c|
  c.env = 'envdd'
  c.service = 'servicedd'
  c.tracer sampler: Datadog::PrioritySampler.new(
    post_sampler: Datadog::Sampling::RuleSampler.new(
        [
            # Sample all 'servicedd' traces at 80.00%:
            Datadog::Sampling::SimpleRule.new(service: 'servicedd', sample_rate: 0.8000)
        ]
    )
    )
end