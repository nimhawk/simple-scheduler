describe('util', () => {
  let util;

  beforeEach(() => {
    util = require('../src/util');
  });

  describe('intervalToMs', () => {
    it('should return the input if not a string', () => {
      util.intervalToMs(100).should.equal(100);
    });

    it('should return the input if the input does not match the re', () => {
      util.intervalToMs('hello').should.equal('hello');
    });

    it('should parse and transform various formats', () => {
      const tests = ['1ms', '10 ms', '3 sec', '3 seconds',
        '1min', '1 minute', '1 hour', '1 day', '1 week',
        '1 month', '10 years'];
      tests.forEach((test) => {
        util.intervalToMs(test).should.be.type('number');
      });
    });

    it('should understand floats', () => {
      util.intervalToMs('1.5 seconds').should.equal(1500);
    });
  });
});
