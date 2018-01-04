const request = require('supertest');
const { app } = require('./server');

describe('GET to /', function() {
  it('should return the proper response', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .expect('exquisit response')
      .end(done);
  });
});
