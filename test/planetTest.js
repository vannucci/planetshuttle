var chai = require('chai');

var assert = chai.assert;

var Planet = require('../model/Planet.js');

describe('Planet', function() {
	var Planet1 = new Planet("X",5);

	it('should create a planet', function() {

		assert.exists(Planet1, "Planet is neither 'null' or 'undefined'");
	});
	
});