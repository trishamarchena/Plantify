# This file is used by Rack-based servers to start the application.

require_relative "config/environment"

run Rails.application
Rails.application.load_server

# Gemfile
gem 'ddtrace', require: 'ddtrace/auto_instrument'

# config/initializers/datadog-tracer.rb
Datadog.configure do |c|
  c.env = 'envdd'
  c.service = 'servicedd'
end
# config/initializers/datadog.rb
require 'ddtrace'

Datadog.configure do |c|
  c.use :rails, log_injection: true
end