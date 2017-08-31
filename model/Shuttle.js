
//Public
/* jshint node: true */
"use strict";


function Shuttle(name, startingLocation, id, solarSystemReference) {
	this.name = name;
	this.currentLocation = startingLocation; //A number from 0 to 3 indicating the planet it is at
	this.velocity = 0; 
	this.direction = 0; //-1 is Sunward, since the sun is 0, Anti-sunward is 1, 0 is no direction
	this.passengers = [];
	this.destination = startingLocation; //You begin going where you are #getwoke
	this.pickUpLocation = [];
	this.distanceToTravel = 0;
	this.id = id;
	this.arrived = true;
	this.system = solarSystemReference;

	this.statusUpdate = function() {
		var status = {
			id: this.id,
			location: this.currentLocation,
			pickUplocations: (this.pickUpLocation.length > 0 ? this.pickUpLocation[0] : "None"),
			destination: this.destination,
			velocity: this.velocity,
			direction: this.direction,
			arrived: this.arrived,
			passengers: this.passengers.length
		};
		return status;
	};

	this.pilot = function() { //This is the entry point to the Shuttle object, this function is called every tick
		if(this.pickUpLocation.length > 0) {
			this.sendTo(this.pickUpLocation[0]); //Assign the next one and keep going
		} 

		if(!this.arrived) {
			this.moveUntilArrived();
		}

		this.checkForPickups();
		this.checkForDropOffs();


	};

	this.queuePickupLocation = function(destination) { //The dispatcher adds a pickup
		this.pickUpLocation.push(destination);
		return this;
	};

	this.sendTo = function (destination) { //A destination comes in the form of a number representing the planet location
		this.destination = destination;
		this.pickUpLocation.splice(0,1);

		if(this.destination === this.currentLocation) {
			return;
		} else {
			this.arrived = false;
		}

		var heading = this.destination - this.currentLocation; //This is a vector, of sorts, telling the shuttle which way to go and how far
		this.direction = Math.sign(heading);
		this.velocity = Math.sign(heading);
		this.distanceToTravel = Math.abs(heading);
		return;
	};

	this.moveUntilArrived = function () { //This function moves the shuttle along assuming it hasn't arrived at the current destination
		if(this.currentLocation <= 0) {
			this.direction = 1;
			this.velocity = 1;
		} else if (this.currentLocation >= 3) {
			this.direction = -1;
			this.velocity = -1;
		}

		this.currentLocation += this.direction;

		if(this.currentLocation === this.destination) {
			this.arrived = true;
			this.velocity = 0;
			this.direction = 0;
			this.heading = 0;
		}


	};

	this.pickUpPassenger  = function (passenger) {
		this.passengers.push(passenger);
		if(passenger.passengerDestination) {
			this.destination = passenger.passengerDestination;
		} else {
			this.destination = this.currentLocation;
		}
		return this; //For event chaining
	};

	this.dropOffPassenger = function (seat) {
		this.passengers.splice(seat,1);
		return this; //A passenger is not placed in the planet's array, they are simply dropped off and disappear.
	};

	this.checkForPickups = function() { //Look through the list of pickups and see if where we are matches it
		for(var j = 0; j < this.system.planets[this.currentLocation].passengers.length; j++) { //Look through the local list of passengers
			if(this.system.planets[this.currentLocation].passengers[j].ticket === this.id) { //This is the right shuttle
				this.pickUpPassenger(this.system.planets[this.currentLocation].boardPassenger(j));
				return true; //picked up passenger
			}
		}				
		return false; //did not pick up passenger

	};

	this.checkForDropOffs = function() { //Look through the list of passengers, see if any of them should be dropped off here and if so remove them
		for(var i = 0; i < this.passengers.length; i++) { //Loop through the list of passengers
			if(this.passengers[i].passengerDestination === this.currentLocation) { //If a passenger matches this drop off point
				this.dropOffPassenger(i);
			}
		}
	};

	console.log("Shuttle " + name + " running");

	
}

module.exports = Shuttle;

