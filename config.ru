require "bundler/setup"
require "./app"
Bundler.require(:default)
run Sinatra::Application
