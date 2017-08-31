
//Public
/* jshint node: true */
"use strict";


function Planet(name, position) {
	this.name = name;
	this.position = position; //A number from 0 to 3 indicating the planet it is at
	this.passengers = []; //An array of passengers, so the newest can be placed onto the list, and then popped off the beginning
	this.shuttles = []; //An array containing all the shuttles on this planet

	//The arrays of passengers and shuttles may not be useful, since those two objects have come to track
	//their own locations independently, FWIW

	//Returns a given passenger from the queue, and returns them for boarding
	this.boardPassenger = function(entry) {
		var platform = this.passengers[entry];
		this.passengers.splice(entry,1);
		return platform;
	};

	//Adds a passenger to the planetary queue when passed
	this.queuePassenger = function(passenger) {
		this.passengers.push(passenger);
	};

	//Returns all passengers on a given planet
	this.getPassengers = function() {
		var passengerManifest = [];
		if(this.passengers.length > 0) {
			for(var i = 0; i < this.passengers.length; i++) {
				passengerManifest.push(this.passengers[i]);
			}
			return passengerManifest;
		} else {
			return passengerManifest;
		}
	};


	this.getDestination = function(j) {
		return this.passengers[j].passengerDestination;
	};

	console.log("Planet " + this.name + " active");

	
}

module.exports = Planet;

