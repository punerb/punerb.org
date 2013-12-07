require 'sinatra'

get '/' do
  @days = (Date.parse("2014/1/11").mjd - Date.today.mjd).to_i
  erb :index
end
