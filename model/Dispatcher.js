
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

		//ICE, return shuttle 1. ShuttlePScore is positional score, ShuttleVScore is velocity score
		var chosenShuttle = 1;
		var shuttlePScore = [0,0];
		var shuttleVScore = [0,0];

		shuttlePScore[0] = Math.abs(passenger.origin - shuttles[0].currentLocation);
		shuttleVScore[0] = shuttles[0].velocity * (passenger.origin - shuttles[0].currentLocation);
		console.log("Shuttle 1 position score " + shuttlePScore[0] + ", shuttle velocity score " + shuttleVScore[0]);

		shuttlePScore[1] = Math.abs(passenger.origin - shuttles[1].currentLocation);
		shuttleVScore[1] = shuttles[1].velocity * (passenger.origin - shuttles[1].currentLocation);
		console.log("Shuttle 1 position score " + shuttlePScore[1] + ", shuttle velocity score " + shuttleVScore[1]);


		//If the two shuttles are equidistant from the request origin, go by velocity. This will also work if both shuttles
		//have velocity zero, since they are both fair candidates and the choice doesn't matter.
		if(shuttlePScore[0] === shuttlePScore[1]) {
			chosenShuttle = returnLowestScoreIndex(shuttleVScore) + 1;
		} else {
			chosenShuttle = returnLowestScoreIndex(shuttlePScore) + 1;
		}

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
	};

	console.log("Dispatcher running");
	
}

module.exports = Dispatcher;
