var chai = require('chai');

var assert = chai.assert;

var SolarSystem = require('../controller/solarsystem.js');

describe('Solar system', function() {
	var SolarSystem1 = new SolarSystem();

	it('should create a Solar system', function() {

		assert.exists(SolarSystem1, "Solar system is neither 'null' or 'undefined'");
	});

	it('Should be an instance of a solarsystem object', function() {
		assert.instanceOf(SolarSystem1,SolarSystem,"SolarSystem1 is an instance of SolarSystem");
	});

	it('should have four planets', function() {
		assert.isObject(SolarSystem1.Planets, "Planets inside Solar System is not empty")
	});
	
});