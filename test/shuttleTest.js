var chai = require('chai');

var assert = chai.assert;

var Shuttle = require('../model/Shuttle.js');
var Passenger = require('../model/Passenger.js');
var SolarSystem = require('../model/SolarSystem.js');

describe('Shuttle', function() {
	var Shuttle1 = new Shuttle('Columbus',2);
	var Passenger1 = new Passenger('Caboose','Earth');
	var SolarSystem1 = new SolarSystem();

	it('should create a shuttle', function() {

		assert.exists(Shuttle1, "Shuttle is neither 'null' or 'undefined'");
		//assert.equal(Emily.passengerDiretion = '');
		//assert.equal(Emily.passengerDestination = '');
	});
	
	it("Should have the correct name", function() {
		assert.strictEqual(Shuttle1.name, 'Columbus', "The name parameter is correctly initialized");
	});

	it("Should have the ability to pick up a passenger", function() {
		assert.property(Shuttle1, 'pickUpPassenger', "The pickUpPassenger function can be accessed");
	});

	it("Should contain no passengers when it is started", function() {
		assert.equal(Shuttle1.passengers.length,0, "The passengers array is empty when it starts");
	});
	it("Should start at a location of 2", function() {
		assert.equal(Shuttle1.currentLocation,2, "The shuttle begins at position 2");
	});

	it("Should set the destination to 3", function() {
		Shuttle1.sendTo(3);
		assert.equal(Shuttle1.destination, 3, "the shuttle now has a destination of 3");
	});

	it("Should return the chosen shuttle", function() {
		assert.isOk(SolarSystem1.dispatcher.sendShuttle(new Passenger('Elana',1,1)));
	});



});