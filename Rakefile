require 'yaml'
require 'cssminify'
require 'uglifier'

ASSETS_DIR = 'public/assets'
ASSETS_MANIFEST_FILE = 'public/assets_manifest.yml'

begin
  require 'jasmine'
  load 'jasmine/tasks/jasmine.rake'
rescue LoadError
  task :jasmine do
    abort "Jasmine is not available. In order to run jasmine, you must: (sudo) gem install jasmine"
  end
end

namespace :assets do
  task :precompile do
    assets = YAML.load_file ASSETS_MANIFEST_FILE

    #CSS
    stylesheets = assets['stylesheets'].map { |asset| File.open(asset).read }
    File.open("#{ASSETS_DIR}/stylesheets/compiled.css", 'w+') do |f|
      f.print CSSminify.compress( stylesheets.join('') )
    end

    #JS
    js = assets['javascripts'].map { |asset| File.open(asset).read }
    File.open("#{ASSETS_DIR}/javascripts/compiled.js", 'w+') do |f|
      f.print Uglifier.compile( js.join('') )
    end
  end
end
