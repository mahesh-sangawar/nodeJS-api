
var superTest = require('supertest');

var server = require('../src/server')(3000);
var sampleRequest = require('../mock/sample_request');
var sampleResponse = require('../mock/sample_response');

describe("Test mi9 Code Challenge", function() {

	it("should return error of get request", function(done) {

		superTest(server).get('/').expect(400, 'Get method not supported'
		).end(done);

	});

  it("should return error of put request", function(done) {

		superTest(server).put('/').expect(400, 'Put method not supported'
		).end(done);

	});

	it("should throw an error for invalid json request", function(done) {

		superTest(server).post('/').send('invalid json string').expect(200, JSON.stringify({
			error : "Could not decode request: JSON parsing failed"
		})).end(done);

	});

  it("should throw an error for invalid json request", function(done) {

		superTest(server).post('/').send("{data: 'dummy json'}").expect(200, JSON.stringify({
			error : "Could not decode request: JSON parsing failed"
		})).end(done);

	});

  it("should parse request JSON and return JSON response", function(done){

		superTest(server).post('/').send(sampleRequest).expect(200,
      sampleResponse).end(done);

	});

});
