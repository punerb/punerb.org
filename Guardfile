guard 'livereload' do
  watch(%r{views/.+\.(erb|haml|slim)$})
  watch(%r{public/.+\.(css|js|html)})
end

guard :jasmine, :server => :jasmine_gem, :jasmine_url => 'http://localhost:8888/', :port => 8888 do
  watch(%r{spec/javascripts/spec\.(js\.coffee|js|coffee)$}) { 'spec/javascripts' }
  watch(%r{spec/javascripts/(.*)Spec\.js$}) { 'spec/javascripts' }
  watch(%r{spec/javascripts/fixtures/.+$})
  watch(%r{public/assets/javascripts/(.+?)\.(js\.coffee|js|coffee)(?:\.\w+)*$}) { |m| "spec/javascripts/#{ m[1] }_spec.#{ m[2] }" }
end
