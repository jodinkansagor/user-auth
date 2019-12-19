require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');

describe('app routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can sign up a new user', () => {
    return request(app)
      .post('/api/v1/auth/signup')
      .send({ username: 'jbj', email: 'jbj@jbj.com', password: 'mydumbpassword' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          username: 'jbj',
          email: 'jbj@jbj.com',
          __v: 0
        });
      });
  });

});
