var chai = require('chai');

var assert = chai.assert;

var Passenger = require('../model/Passenger.js');

describe('Passenger', function() {
	var Emily = new Passenger('Emily','Earth');

	it('should create a passenger', function() {

		assert.exists(Emily, "Emily is neither 'null' or 'undefined'");
	});
	
	it("Should have the initialized properties", function() {
		assert.strictEqual(Emily.name, 'Emily', "The name parameter is correctly initialized");
	});
});