
var wordwrap = require('../');


describe('wordwrap(str, max, eol)', function () {

  it('should break lines with "\\n" by default', function () {
    wordwrap('foo', 2).should.eql('fo\no');
  })

  it('should return the str if it is not larger than `max`', function () {
    wordwrap('foo', 8).should.eql('foo');
  })

  it('should allow any `eol`', function () {
    wordwrap('bar', 2, 'end').should.eql('baendr');
  })

});
