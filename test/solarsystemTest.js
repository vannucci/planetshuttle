var chai = require('chai');

var assert = chai.assert;

var SolarSystem = require('../controller/solarsystem.js');
var Passenger = require('../controller/passenger.js');

describe('Solar system', function() {
	var SolarSystem1 = new SolarSystem();
	var Passenger1Seat = SolarSystem1.createNewPassenger("Jon Gazi",2); //Loads the passenger into the solar system


	it('should create a Solar system', function() {

		assert.exists(SolarSystem1, "Solar system is neither 'null' or 'undefined'");
	});

	it('Should be an instance of a solarsystem object', function() {
		assert.instanceOf(SolarSystem1,SolarSystem,"SolarSystem1 is an instance of SolarSystem");
	});

	it('Contains an array of planets', function() {
		assert.property(SolarSystem1,'Planets', "Planets inside Solar System is not empty")
	});

	it('should have a function next', function() {
		assert.property(SolarSystem1, 'next', "Solar system contains the property next");
	});

	it('should have two shuttles', function() {
		assert.property(SolarSystem1, 'shuttle1' && 'shuttle2', "Solar system contains two shuttles");
	});

	it('should have access to a shuttle method moveUntilArrived', function() {
		assert.nestedProperty(SolarSystem1,'shuttle1.moveUntilArrived',"Shuttle in solar system has moveUntilArrived");
	});

	it('should assign a passenger a seat', function() {
		assert.isObject(SolarSystem1.activePassengers[Passenger1Seat],"Passenger is created, in solar system scope, and loaded into seat and can be recalled");
	});

	it('should be able to set the destination for the dispatcher', function() {
		assert.isOk(SolarSystem1.activePassengers[Passenger1Seat].request(3), "Jon Gazi asks to go to Mars");
	});

	it('should then pass the passenger object to the dispatcher with a destination dispatcher can read', function() {
		assert.isOk(SolarSystem1.dispatcher.sendShuttle(SolarSystem1.activePassengers[Passenger1Seat]), "Solar system asks the dispatcher for a ride");
	});

});