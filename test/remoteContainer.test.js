const request = require('supertest');
// const assert = require('assert');

describe('Supertest against remote', function () {
  it('Remote check for Nginx', function () {
    return request('http://localhost:8080')
      .get('/')
      .expect('Content-Type', /text/)
      .expect(200);
  });
});
