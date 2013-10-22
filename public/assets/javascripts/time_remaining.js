ONE_DAY = 1000*60*60*24;
var time_difference = function(startDate, endDate) {
  return endDate - startDate;
};

var time_remaining_in_days = function(startDate, endDate) {
  var difference = time_difference(startDate, endDate);
  days = Math.ceil( Math.abs(difference/ONE_DAY) );
  var after = '';
  if(difference < 0) {
    after = ' ago';
  }

  return days + ' ' + pluralize('day', days) + after;
};

var pluralize = function(noun, count) {
  var suffix = '';
  if( Math.abs(count) > 1 ) {
    suffix = 's';
  }
  return noun + suffix;
};
