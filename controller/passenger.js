//This function should simply be a constructor for a passenger object, where a passenger gets a name, an origin, a direction
//and a destination.

//Public
module.exports = Passenger;


function Passenger(name, origin) {
	this.name = name;
	this.origin = origin;
	this.passengerDirection = '';
	this.passengerDestination = '';

	this.shuttleRequest = function (direction,destination) {
		passengerDirection = direction;
		passengerDestination = destination;
		//call the dispatcher here
		//dispatcher(passengerDirection,passengerDestination);
	};
	
}

