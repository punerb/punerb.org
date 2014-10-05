require 'sinatra'

get '/' do
  next_meetup_date = Date.parse('2014/11/1')
  @days = (next_meetup_date.mjd - Date.today.mjd).to_i
  erb :index
end
