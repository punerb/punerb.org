require 'sinatra'

get '/' do
  @days = (Date.parse("2013/11/16").mjd - Date.today.mjd).to_i
  erb :index
end
