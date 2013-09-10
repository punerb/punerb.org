require "bundler/setup"
require "./app"
Bundler.require(:default, ENV['RACK_ENV'])
run Sinatra::Application
