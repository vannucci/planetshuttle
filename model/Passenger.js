//This function should simply be a constructor for a passenger object, where a passenger gets a name, an origin, a direction
//and a destination.

//Public
/* jshint node: true */
"use strict";



function Passenger(name, origin, direction, ssRef) {
	this.name = name;
	this.origin = origin;
	this.passengerDirection = direction;
	this.passengerDestination = null;
	this.currentLocation = origin;
	this.boardedShuttle = null; //This is the shuttle the passenger is on
	this.ticket = null;
	var solarSystem = ssRef;

	this.request = function () {
		//this.passengerDirection = direction;
		//this.passengerDestination = destination;
		//call the dispatcher here, dispatcher will set ticket 1 or 2 depending on shuttle
		this.ticket = solarSystem.dispatcher.sendShuttle(this);
		if(this.ticket === 0) {
			return false;
		} else {
			return this.ticket;
		}

	};

	console.log("Passenger " + this.name + " reporting");
	
}

module.exports = Passenger;

