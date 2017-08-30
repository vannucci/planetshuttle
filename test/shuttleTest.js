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
	
	it("Should check for a passenger at location 3, and pick up that passenger", function() {
		console.log("Length of passengers " + Shuttle1.passengers.length);
		console.log(Shuttle1.checkForPickups());
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
/*
	it("Should pick up a passenger when the pickUpPassenger function is called", function() {
		Shuttle1.pickUpPassenger(Passenger1);

		assert.equal(Shuttle1.passengers.length,1, "The passenger has boarded");
	});
*/
	it("Should start at a location of 2", function() {
		assert.equal(Shuttle1.currentLocation,2, "The shuttle begins at position 2");
	});

	it("Should set the destination to 3", function() {
		Shuttle1.sendTo(3);
		assert.equal(Shuttle1.destination, 3, "the shuttle now has a destination of 3");
	});

	it("Should move one space to the right when moveUntilArrived is called on a destination of 3", function() {
		console.log(Shuttle1.currentLocation);
		Shuttle1.sendTo(3);
		console.log(Shuttle1.currentLocation);
		Shuttle1.moveUntilArrived();
		console.log(Shuttle1.currentLocation);
		Shuttle1.moveUntilArrived();
		console.log(Shuttle1.currentLocation);
		assert.equal(Shuttle1.currentLocation,3, "The shuttle has arrived at position 3");
	});

	it("Should check for a passenger at location 3, and pick up that passenger", function() {
		console.log("Length of passengers " + Shuttle1.passengers.length);
		console.log(Shuttle1.checkForPickups());
	});


});