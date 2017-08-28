//This function should simply be a constructor for a passenger object, where a passenger gets a name, an origin, a direction
//and a destination.

//Public
module.exports = Passenger;


function Passenger(name, origin, ssRef) {
	this.name = name;
	this.origin = origin;
	this.passengerDirection = '';
	this.passengerDestination = '';
	this.currentLocation = origin;
	this.boardedShuttle = null; //This is the shuttle the passenger is on
	this.ticket = null;
	this.solarSystem = ssRef;

	this.request = function (direction,destination) {
		this.passengerDirection = direction;
		this.passengerDestination = destination;
		//call the dispatcher here, dispatcher will set ticket 1 or 2 depending on shuttle
		this.ticket = this.solarSystem.dispatcher.sendShuttle(this);
		if(this.ticket === 0) {
			console.log("You cannot a board a shuttle today");
		}
		console.log("Passenger " + this.name + " starting from " + this.origin + " requesting passage to " + this.passengerDestination);
		return this;

	};

	this.setLocation = function(location) {
		this.currentLocation = location;
		return this;
	}

	this.areWeThereYet = function() { //On every tick, the passengers themselves check if they've arrived at their destination
		if(this.passengerDestination === this.boardedShuttle.currentLocation) {
			this.boardedShuttle.dropOffPassenger(this.name);
			console.log("I am here!");
		} else {
			console.log("Are we there yet?");
			console.log("I will turn this shuttle around!!");
		}

	}

	console.log("Passenger " + this.name + " reporting");
	
}

