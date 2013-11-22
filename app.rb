require 'sinatra'

get '/' do
  @days = (Date.parse("2013/12/7").mjd - Date.today.mjd).to_i
  erb :index
end
