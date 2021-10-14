# config/initializers/datadog-tracer.rb
Datadog.configure do |c|
  c.env = 'envdd'
  c.service = 'servicedd'
end