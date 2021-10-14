# This file is used by Rack-based servers to start the application.

require_relative "config/environment"

run Rails.application
Rails.application.load_server




# # config/initializers/datadog.rb
# require 'ddtrace'

# Datadog.configure do |c|
#   c.use :rails, log_injection: true
# end