const request = require('supertest');

const app = require('../app');

describe('GET /calculator Route', function () {
  it('text/html', function (done) {
    request(app)
      .get('/calculator')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200, done);
  });
});
