describe('pluralizer', function() {
  beforeEach(function() {
    this.testNoun = 'day'
  })
  it('should return days with count of more than 1', function() {
    var count = 2
    expect(pluralize(this.testNoun, count)).toEqual('days')
  })
  it('it should return day with count of 1', function() {
    var count = 1
    expect(pluralize(this.testNoun, count)).toEqual('day')
  })
  it('it should return day with count of 0', function() {
    var count = 0
    expect(pluralize(this.testNoun, count)).toEqual('day')
  })
  it('it should return day with count of -1', function() {
    var count = -1
    expect(pluralize(this.testNoun, count)).toEqual('day')
  })
  it('it should return days with count of less than -1', function() {
    var count = -2
    expect(pluralize(this.testNoun, count)).toEqual('days')
  })
})
