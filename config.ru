require "bundler/setup"
require "rack-rewrite"

Bundler.require(:default)

ENV['RACK_ENV'] ||= 'development'
ENV['SITE_URL'] ||= 'www.punerb.org'
use Rack::Rewrite do
    r301 %r{.*}, "http://#{ENV['SITE_URL']}$&", :if => Proc.new {|rack_env|
        ENV['RACK_ENV'] == 'production' && rack_env['SERVER_NAME'] != ENV['SITE_URL']
      }
    r301 %r{^(.+)/$}, '$1'
  end

run Rack::Jekyll.new(:destination => '_site')
