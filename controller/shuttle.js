
//Public
module.exports = Shuttle;


function Shuttle(name, currentLocation,id) {
	this.name = name;
	this.currentLocation = currentLocation; //A number from 0 to 3 indicating the planet it is at
	this.velocity = 0; 
	this.direction = 0; //-1 is Sunward, since the sun is 0, Anti-sunward is 1, 0 is no direction
	this.passengers = [];
	this.destination = [];
	this.pickUpLocation = [];
	this.distanceToTravel = 0;
	this.id = id;

	this.pilot = function() { //This is the entry point to the Shuttle object, this function is called every tick
		if(this.moveUntilArrived()) { //If you have arrived at your destination...
			this.destination.shift();  //Remove that destination from the queue.
			if(this.destination > 0) { //If there are still destinations in the queue...
				this.sendTo(destination[0]) //Assign the next one and keep going
			}
		}
		this.checkForPickups();
		this.checkForDropOffs();

	}

	this.queuePickupLocation = function(destination) { //The dispatcher adds a pickup
		this.pickUpLocation.push(destination);
		return this;
	}

	this.sendTo = function (destination) { //A destination comes in the form of a number representing the planet location
		this.destination = destination[0]
		var heading = this.destination - this.currentLocation; //This is a vector, of sorts, telling the shuttle which way to go and how far
		if(Math.sign(heading) !== 0 || Math.sign(heading) !== -0) {
			this.direction = Math.sign(heading);
			this.velocity = Math.sign(heading);
			this.distanceToTravel = Math.abs(heading); 
		}; //It can be the case that heading equals -0, #javascriptpower
		return this; //For event chaining
	}

	this.moveUntilArrived = function () { //This function moves the shuttle along assuming it hasn't arrived at the current destination
		if(this.currentLocation !== this.destination) {
			this.currentLocation += this.direction;
			return false;
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

	this.dropOffPassenger = function (seat) {
		var platform = passengers[seat]; //Place the dropping off passenger on the platform
		this.passengers.splice(seat,1);

		for(var j = 0; j < this.destination.length; j++) { //Go through every destination
			if(this.destination[j] === this.currentLocation) { //Find an instance of this passengers destination
				this.destination.splice(j,1);
				break; //Remove only one instance of this destination

			}
		}

		return this; //A passenger is not placed in the planet's array, they are simply dropped off and disappear.
	}

	this.checkForPickups = function() { //Look through the list of pickups and see if where we are matches it
		for(var i = 0; i < this.pickUpLocation.length; i++) { //Loop through every pickup location
			if(this.currentLocation === this.pickUpLocation[i]) { //See if we are at any of them, if we are...
				for(var j = 0; j < system.Planets[this.currentLocation].passengers.length; j++) { //Look through the local list of passengers
					if(system.Planets[this.currentLocation].passengers[j].ticket = this.id) { //This is the right shuttle
						this.pickUpPassenger(system.Planets[this.currentLocation].boardPassenger(j));
						this.pickUpLocation[i].splice(i,1); //Remove this pick up location from the pickup queue
						this.destination.push(system.Planets[this.currentLocation].passengers[j].passengerDestination); //Push the new destination onto the list
					}
				}				
			}
		}

	}

	this.checkForDropOffs = function() { //Look through the list of passengers, see if any of them should be dropped off here and if so remove them
		for(var i = 0; i < this.passengers.length; i++) { //Loop through the list of passengers
			if(this.passengers[i].passengerDestination === this.currentLocation) { //If a passenger matches this drop off point
				this.dropOffPassenger(i);
			}
		}
	}

	console.log("In the pipe, 5 by 5. Shuttle is running");

	
}

