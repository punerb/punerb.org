describe("time remaining", function() {
  beforeEach(function() {
    ONE_DAY = 1000*60*60*24
    this.earlierDate = new Date(0)
  })

  describe('time difference', function() {
    it("says what's the difference in miliseconds between earlierDate and laterDate", function() {
      laterDate = new Date(10)
      expect(time_difference(this.earlierDate, laterDate)).toEqual(10)
    })
  })

  it("says how much time is left in days from earlierDate to laterDate", function() {
    var laterDate = new Date(ONE_DAY)
    expect(time_remaining_in_days(this.earlierDate, laterDate)).toEqual('1 day')
  })

  it("says how much time is left in days from earlierDate to laterDate", function() {
    var laterDate = new Date(ONE_DAY)
    expect(time_remaining_in_days(this.earlierDate, laterDate)).toEqual('1 day')
  })

  it("says how much time is left in days from earlierDate to laterDate and rounding it", function() {
    var laterDates = [
      new Date(ONE_DAY * 1.3),
      new Date(ONE_DAY * 1.5),
      new Date(ONE_DAY * 1.7)
    ]

    for( var _i = 0; _i < laterDates.length; _i++ ) {
      var date = laterDates[_i]
      expect(time_remaining_in_days(this.earlierDate, date)).toEqual('2 days')
    }
  })

  it("says how much days passed was since earlierDate to laterDate", function() {
    var laterDate = new Date(ONE_DAY)
    expect(time_remaining_in_days(laterDate, this.earlierDate)).toEqual('1 day ago')
  })
})
