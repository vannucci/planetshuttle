var chai = require('chai');

var assert = chai.assert;

var SolarSystem = require('../model/SolarSystem.js');
var Passenger = require('../model/Passenger.js');


describe('Solar system', function() {
	var SolarSystem1 = new SolarSystem();
	var Passenger1Seat = SolarSystem1.createNewPassenger("Jon",2); //Loads the passenger into the solar system



	it('should create a Solar system', function() {

		assert.exists(SolarSystem1, "Solar system is neither 'null' or 'undefined'");
	});

	it('Should be an instance of a solarsystem object', function() {
		assert.instanceOf(SolarSystem1,SolarSystem,"SolarSystem1 is an instance of SolarSystem");
	});

	it('Contains an array of planets', function() {
		assert.property(SolarSystem1,'planets', "Planets inside Solar System is not empty")
	});

	it('should have a function next', function() {
		assert.property(SolarSystem1, 'next', "Solar system contains the property next");
	});

	it('should have access to a shuttle method moveUntilArrived', function() {
		assert.nestedProperty(SolarSystem1,'shuttles[0].moveUntilArrived',"Shuttle in solar system has moveUntilArrived");
	});

	it('should create a passenger and place them into a planet queue', function() {
		assert.isObject(SolarSystem1.createNewPassenger("Darryl", 2),"Passenger is created, in solar system scope, and placed in queue of origin planet");
	});

	it('should be able to set the destination for the dispatcher', function() {
		assert.isOk(SolarSystem1.planets[2].passengers[0].request(-1,1), "Darryl asks to go to Venus");
	});

	it('should then pass the passenger object to the dispatcher with a destination dispatcher can read', function() {
		assert.isOk(SolarSystem1.dispatcher.sendShuttle(SolarSystem1.planets[2].passengers[0]), "Solar system asks the dispatcher for a ride");
	});

	it('should return an object containing the current status of the shuttle', function() {
		assert.isObject(SolarSystem1.shuttles[0].statusUpdate(), "We query the shuttle for its status");
	});

	it('should set a destination, move it until it arrives, send status updates on every tick, and tick twice more than needed', function() {
		SolarSystem1.shuttles[0].sendTo(3);
		SolarSystem1.shuttles[0].statusUpdate();
		SolarSystem1.shuttles[0].pilot();
		SolarSystem1.shuttles[0].statusUpdate();
		SolarSystem1.shuttles[0].pilot();
		SolarSystem1.shuttles[0].statusUpdate();
		SolarSystem1.shuttles[0].pilot();
		SolarSystem1.shuttles[0].statusUpdate();
		SolarSystem1.shuttles[0].pilot();
		SolarSystem1.shuttles[0].statusUpdate();
		SolarSystem1.shuttles[0].pilot();
	});

	it('create passenger at 0, passenger requests to go to 3, tick enough times to get there', function() {
		SolarSystem1.createNewPassenger("Shannon",0).request(1,3);
		SolarSystem1.shuttles[0].statusUpdate();
		SolarSystem1.shuttles[0].pilot();
		SolarSystem1.shuttles[0].statusUpdate();
		SolarSystem1.shuttles[0].pilot();
		SolarSystem1.shuttles[0].statusUpdate();
		SolarSystem1.shuttles[0].pilot();
		SolarSystem1.shuttles[0].statusUpdate();
		SolarSystem1.shuttles[0].pilot();
		SolarSystem1.shuttles[0].statusUpdate();
		SolarSystem1.shuttles[0].pilot();
	});

	it('create a passenger at 2, passenger requests to go to 0, click on next to tick the environment and both shuttles, pick up and drop off the passenger', function() {
		SolarSystem1.createNewPassenger("Mike",2,SolarSystem1).request(-1,0);
		SolarSystem1.shuttles[0].statusUpdate();
		SolarSystem1.shuttles[1].statusUpdate();
		SolarSystem1.next();
		SolarSystem1.shuttles[0].statusUpdate();
		SolarSystem1.shuttles[1].statusUpdate();
		SolarSystem1.next();
		SolarSystem1.shuttles[0].statusUpdate();
		SolarSystem1.shuttles[1].statusUpdate();
		SolarSystem1.next();
		SolarSystem1.shuttles[0].statusUpdate();
		SolarSystem1.shuttles[1].statusUpdate();
		SolarSystem1.next();
		SolarSystem1.shuttles[0].statusUpdate();
		SolarSystem1.shuttles[1].statusUpdate();
		SolarSystem1.next();
		SolarSystem1.shuttles[0].statusUpdate();
		SolarSystem1.shuttles[1].statusUpdate();
		SolarSystem1.next();
		SolarSystem1.shuttles[0].statusUpdate();
		SolarSystem1.shuttles[1].statusUpdate();
		SolarSystem1.next();
		SolarSystem1.shuttles[0].statusUpdate();
		SolarSystem1.shuttles[1].statusUpdate();
		SolarSystem1.next();


	});

	it('should get the status of a shuttle', function() {
		console.log(SolarSystem1.shuttles[0].statusUpdate());
	});
	
});