require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const User = require('../lib/models/User');

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

  it('can login a user', async () => {
    const user = await User.create({ username: 'jbj', email: 'jbj@jbj.com', password: 'mydumbpassword' });
    return request(app)
      .post('/api/v1/auth/login')
      .send({ username: 'jbj', email: 'jbj@jbj.com', password: 'mydumbpassword' })
      .then(res => {
        expect(res.body).toEqual({
          _id: user.id,
          username: 'jbj',
          email: 'jbj@jbj.com',
          __v: 0
        });
      });
  });

  it('fails when a bad email is used', async () => {
    await User.create({ username: 'jbj', email: 'jbj@jbj.com', password: 'mydumbpassword' });
    return request(app)
      .post('/api/v1/auth/login')
      .send({ username: 'jbj', email: 'jbj@notjbj.com', password: 'mydumbpassword' })
      .then(res => {
        expect(res.body).toEqual({
          message: 'Invalid Email/Password',
          status: 401
        });
      });
  });

  it('fails when a bad password is used', async () => {
    await User.create({ username: 'jbj', email: 'jbj@jbj.com', password: 'mydumbpassword' });
    return request(app)
      .post('/api/v1/auth/login')
      .send({ username: 'jbj', email: 'jbj@jbj.com', password: 'myotherdumbpassword' })
      .then(res => {
        expect(res.body).toEqual({
          message: 'Invalid Email/Password',
          status: 401
        });
      });
  });

});
