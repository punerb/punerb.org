(function(){
  var remainingDaysAnchor = document.getElementById('remainingDays');
  var nextMeet = new Date( remainingDaysAnchor.getAttribute('data-date') );
  var today = new Date();
  remainingDaysAnchor.innerHTML = time_remaining_in_days(today, nextMeet);
})();
