var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('respond with bye jenkins!!!!', function(done) {
    request(app).get('/').expect('bye jenkins!!!!', done);
  });
});
