source 'https://rubygems.org'

ruby '2.0.0'

gem 'sinatra'
gem 'rake'

group :assets do
  gem 'cssminify'
  gem 'uglifier'
end

group :development do
  gem 'shotgun'
end

group :test do
  gem 'rack-test', require: 'rack/test'
end

group :production do
  gem 'unicorn'
end
