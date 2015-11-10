process.env.NODE_ENV = 'test';

var mocha = require('mocha');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../src/server/app.js');

var should = chai.should();
chai.use(chaiHttp);

describe('Server router', function() {
  it('Should return...', function(done) {
    chai.request(server)
    .get('/')
    .end(function(err, res) {
      res.should.have.status(200);
      done();
    });
  });
});

describe('Server router', function() {
  it('Should return...', function(done) {
    chai.request(server)
    .get('/')
    .end(function(err, res) {
      res.text.should.have.string('<h1>ExpressJS</h1>');
      done();
    });
  });
});
