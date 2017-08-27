var chai = require('chai');

var assert = chai.assert;

var Shuttle = require('../controller/shuttle.js');

describe('Shuttle', function() {
	var Shuttle1 = new Shuttle('Columbus',2);

	it('should create a shuttle', function() {

		assert.exists(Shuttle1, "Shuttle is neither 'null' or 'undefined'");
		//assert.equal(Emily.passengerDiretion = '');
		//assert.equal(Emily.passengerDestination = '');
	});
	
	it("Should have the initialized properties", function() {
		assert.strictEqual(Shuttle1.name, 'Columbus', "The name parameter is correctly initialized");
	});
});