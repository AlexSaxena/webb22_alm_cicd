const assert = require('assert');

const Greet = require('../controllers/greet');

describe('Greeting', function () {
  beforeEach(function () {
    this.greet = new Greet();
  });
  describe('getGreet()', function () {
    it('should return Hello newUser when the Greet is created', function () {
      assert.equal(this.greet.sayHello(), 'Hello newUser');
    });
  });
  describe('getGreet() with param', function () {
    it('should return Hello Anakin when entered Anakin ', function () {
      assert.equal(this.greet.sayHello('Anakin'), 'Hello Anakin');
    });
  });
});
