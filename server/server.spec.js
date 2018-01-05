const request = require('supertest');
const expect = require('expect');
const { app } = require('./server');
const { users } = require('../usersData');

describe('Server', () => {
  describe('GET to /', () => {
    it('should return the proper response', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({ message: 'exquisit response' });
        })
        .end(done);
    });
  });

  describe('GET to /users', () => {
    it('should return an array of users', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            username: "smstar",
            age: 12
          });
        })
        .end(done);
    });
  });
});
