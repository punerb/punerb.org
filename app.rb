require 'sinatra'

get '/' do
  @days = (Date.parse("2013/10/05").mjd - Date.today.mjd).to_i
  erb :index
end
