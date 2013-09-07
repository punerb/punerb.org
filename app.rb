require 'sinatra'

get '/' do
  @days = (Date.parse("2013/9/14").mjd - Date.today.mjd).to_i
  erb :index
end
