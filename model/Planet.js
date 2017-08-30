
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

	this.boardPassenger = function(entry) {
		var platform = this.passengers[entry];
		this.passengers.splice(entry,1);
		return platform;
	};

	this.queuePassenger = function(passenger) {
		this.passengers.push(passenger);
		return this;
	};

	this.getPassengers = function(i) {
		if(this.passengers.length > 0) {
			return this.passengers[i];
		} else {
			return null;
		}
	};

	this.returnPassenger = function(j) {
		if(this.passengers[j]) {
			return this.passengers[j];
		} else {
			return null;
		}
	};

	console.log("Planet " + this.name + " active");

	
}

module.exports = Planet;

