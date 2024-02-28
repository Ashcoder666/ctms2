import request from 'supertest';
import { app } from '../../../src';
import mongoose from 'mongoose';
import { server } from '../../../src';



describe('POST /api/register', function() {
    it('responds with json', function(done) {
      request(app)
        .post('/api/register')
        .send({fullName:"john", email:"johndDkoe@gmail.com" , role:"MANAGER" , password:"jndksfjw"})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });
  });

  afterAll(async () => {
    await mongoose.disconnect(); // Close Mongoose connection
    // Stop the server if necessary (e.g., server.close())
    server.close()
  });


