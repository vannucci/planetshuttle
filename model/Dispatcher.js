
//Public
/* jshint node: true */
"use strict";


function Dispatcher(solarsystem,shuttle1, shuttle2) {

	var currentSolarSystem = solarsystem;

	var shuttles = [shuttle1,shuttle2];

	this.sendShuttle = function (passenger) {
		//For now, it just sends whichever shuttle is not moving
		console.log("Dispatcher here! Request for shuttle from " + passenger.name + " has been made from " + passenger.origin + " to " + passenger.passengerDestination);

		var shuttleScore = [0,0];

		shuttleScore[0] = Math.sign(shuttles[0].velocity) * ( passenger.origin - shuttles[0].currentLocation);
		console.log("Shuttle score 1 " + shuttleScore[1]);
		shuttleScore[1] = Math.sign(shuttles[1].velocity) * ( passenger.origin - shuttles[1].currentLocation);
		console.log("Shuttle score 2 " + shuttleScore[1]);


		if(shuttleScore[0] <= shuttleScore[1] && !isNaN(shuttleScore[0])) {
			currentSolarSystem.shuttles[0].queuePickupLocation(parseInt(passenger.origin));
			console.log("Shuttle 1 assigned to " + passenger.name + " from " + passenger.origin + " with destination " + passenger.passengerDestination);
			return 1; //return the ticket number
		} else if(!isNaN(shuttleScore[1])) {
			currentSolarSystem.shuttles[1].queuePickupLocation(parseInt(passenger.origin));
			console.log("Shuttle 2 assigned to " + passenger.name + " from " + passenger.origin + " with destination " + passenger.passengerDestination);
			return 2; //return the ticket number
		} else {
			return 0;
		}

	};  

	console.log("Dispatcher running");
	
}

module.exports = Dispatcher;
