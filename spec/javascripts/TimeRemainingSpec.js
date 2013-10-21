describe("time remaining", function() {
  beforeEach(function() {
    ONE_DAY = 1000*60*60*24
    this.startDate = new Date(0)
  })

  describe('time difference', function() {
    it("says what's the difference in miliseconds between startDate and endDate", function() {
      endDate = new Date(10)
      expect(time_difference(this.startDate, endDate)).toEqual(10)
    })
  })

  it("says how much time is left in days from startDate to endDate", function() {
    var endDate = new Date(ONE_DAY)
    expect(time_remaining_in_days(this.startDate, endDate)).toEqual('1 day')
  })

  it("says how much days passed was since startDate to endDate", function() {
    var endDate = new Date(ONE_DAY)
    expect(time_remaining_in_days(endDate, this.startDate)).toEqual('1 day ago')
  })
})
