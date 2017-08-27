
//Public
module.exports = Shuttle;


function Shuttle(name, currentLocation) {
	this.name = name;
	this.currentLocation = currentLocation; //A number from 0 to 3 indicating the planet it is at
	this.velocity = 0; 
	this.direction = 0; //-1 is Sunward, since the sun is 0, Anti-sunward is 1, 0 is no direction
	this.passengers = [];
	this.destination = [];
	this.distanceToTravel = 0;

	this.pilot = function() {
		if(this.moveUntilArrived()) {
			var exitedPassenger = dropOffPassenger();
			var shifted = destination.shift();
		}
	}

	this.queueDestination = function(destination) {
		this.destination.push(destination);
		return this;
	}

	this.sendTo = function (destination) { //A destination comes in the form of a number representing the planet location
		this.destination = destination
		var heading = this.destination - this.currentLocation; //This is a vector, of sorts, telling the shuttle which way to go and how far
		if(Math.sign(heading) !== 0 || Math.sign(heading) !== -0) {
			this.direction = Math.sign(heading);
			this.velocity = Math.sign(heading);
			this.distanceToTravel = Math.abs(heading); 
		}; //It can be the case that heading equals -0, #javascriptpower
		return this; //For event chaining
	}

	this.moveUntilArrived = function () {
		if(this.currentLocation !== this.destination) {
			this.currentLocation += this.direction;
			return false; //For event chaining
		} else {
			this.velocity = 0; //Now you have stopped
			this.destination = this.currentLocation; //Where you want to go is where you are #lifegoals
			return true;
		}
	}

	this.pickUpPassenger  = function (passenger) {
		this.passengers.push(passenger);
		return this; //For event chaining
	}

	this.dropOffPassenger = function () {
		return passengers.shift(); //On my bus, first in is first off and everyone follows it
	}

	console.log("In the pipe, 5 by 5. Shuttle is running");

	
}

