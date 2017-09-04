
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

	//
	this.sendShuttle = function (passenger) {

		var shuttleScore = [0,0];

		shuttleScore[0] = Math.abs(passenger.origin - shuttles[0].currentLocation);
		console.log(shuttleScore[0]);

		shuttleScore[1] = Math.abs(passenger.origin - shuttles[1].currentLocation);
		console.log(shuttleScore[1]);

		var chosenShuttle = returnLowestScoreIndex(shuttleScore) + 1;
		currentSolarSystem.shuttles[chosenShuttle - 1].queuePickupLocation(passenger.origin);
		return chosenShuttle;

	};

	var returnLowestScoreIndex = function(array) {
		var min = array[0];
		var minIndex = 0;

		for(var i = 0; i < array.length; i++) {
			if(array[i] < min) {
				minIndex = i;
				min = array[i];
			}
		}

		return minIndex;
	}  

	console.log("Dispatcher running");
	
}

module.exports = Dispatcher;
