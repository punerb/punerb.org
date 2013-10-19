require 'sinatra'

get '/' do
  @days = (Date.parse("2013/11/09").mjd - Date.today.mjd).to_i
  erb :index
end
