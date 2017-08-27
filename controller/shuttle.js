
//Public
module.exports = Shuttle;


function Shuttle(name, currentLocation) {
	this.name = name;
	this.currentLocation = currentLocation; //A number from 0 to 3 indicating the planet it is at
	this.velocity = 0; //This might be redundant
	this.direction = 0; //-1 is Sunward, since the sun is 0, Anti-sunward is 1, 0 is no direction
	this.passengers = [];
	this.destination = 0;
	this.distanceToTravel = 0;

	function sendTo(destination) { //A destination comes in the form of a number representing the planet location
		var heading = destination - this.currentLocation; //This is a vector, of sorts, telling the shuttle which way to go and how far
		if(Math.sign(heading) != 0 || Math.sign(heading) != -0) {
			this.direction = Math.sign(heading);
		}; //It can be the case that heading equals -0, #javascriptpower
		this.distanceToTravel = Math.abs(heading); //Check this for zero, because then you're there
		return this; //For event chaining
	}

	this.moveUntilArrived = function () {
		if(this.distanceToTravel != 0) {
			currentLocation += direction;
		}
		return this; //For event chaining
	}

	function pickUpPassenger(passenger) {
		this.passengers.push(passenger);
		return this; //For event chaining
	}

	function dropOffPassenger(name) {
		for(var i = 0;i<passengers.length;i++) {
			if(passengers[i].destination === this.currentLocation) {
				passengers.splice(i,1);
			}
		}
		return this; //For event chaining
	}

	console.log("In the pipe, 5 by 5. Shuttle is running");

	
}

