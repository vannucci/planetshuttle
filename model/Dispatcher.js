
//Public
/* jshint node: true */
"use strict";


function Dispatcher(solarsystem,shuttle1, shuttle2) {

	var currentSolarSystem = solarsystem;

	var shuttles = [shuttle1,shuttle2];

	//This is the part I wish I had had more time to work on. As of right now, the dispatcher simply sends whichever shuttle
	//is closest to the passenger who made the request. This section should also take into account whether the shuttle is
	//moving at the time of the request, which way they are moving, so as to optimize which shuttle takes the fewest steps to
	//pick up the next passenger.
	this.sendShuttle = function (passenger) {

		var shuttleScore = [0,0];

		shuttleScore[0] = Math.abs(passenger.origin - shuttles[0].currentLocation);

		shuttleScore[1] = Math.abs(passenger.origin - shuttles[1].currentLocation);


		if((shuttleScore[0] <= shuttleScore[1]) && !isNaN(shuttleScore[0])) {
			currentSolarSystem.shuttles[0].queuePickupLocation(passenger.origin);
			return 1; //return the ticket number
		} else if(!isNaN(shuttleScore[1])) {
			currentSolarSystem.shuttles[1].queuePickupLocation(passenger.origin);
			return 2; //return the ticket number
		} else {
			return 0;
		}

	};  

	console.log("Dispatcher running");
	
}

module.exports = Dispatcher;
