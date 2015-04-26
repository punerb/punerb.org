source 'https://rubygems.org'

ruby "2.2.2"

gem 'sinatra'

group :development do
  gem 'shotgun'
end

group :test do
  gem 'rack-test', require: 'rack/test'
end

group :production do
  gem 'unicorn', '4.8.3'
end
