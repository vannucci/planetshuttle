
//Public
module.exports = SolarSystem;

var Planet = require("./planet.js");
var Shuttle = require("./shuttle.js");
var Dispatcher = require("./dispatcher.js");
var Passenger = require("./passenger.js");


function SolarSystem() {

	this.Planets = [

		new Planet("Mercury",0), //Each entry is a new planet object
		new Planet("Venus", 1),
		new Planet("Earth", 2),
		new Planet("Mars", 3)


	] //Solar system contains four planets

	this.activePassengers = [];


	this.recallPassengerInfo = function(passengerSeat) {
		return activePassengers[passengerSeat];
	}

	this.addPassenger = function(passenger) {
		this.activePassengers.push(passenger);
		return this.activePassengers.length - 1; //the position of this new passenger in the array
	};

	this.removePassenger = function(passengerSeat) {
		if(activePassengers[passengerSeat]) {
			activePassengers.splice(passengerSeat,1);
			return true;
		}
		return false;
	};

	this.createNewPassenger = function(name,origin) {
		var newPassenger = new Passenger(name, origin);
		var newPassengerSeat = this.addPassenger(newPassenger);
		return newPassengerSeat;
	}


	this.shuttle1 = new Shuttle("Johnson",0); //Two new shuttles are created when the solar system is initialized
	this.shuttle2 = new Shuttle("Vaughn",2); //Hopefully these ladies will help me

	this.dispatcher = new Dispatcher(this,this.shuttle1,this.shuttle2); //Instantiate a new dispatcher, pass in the solar system and the two shuttles

	this.next = function() {
		console.log("NEXT!");
		shuttle1.moveUntilArrived();
		shuttle2.moveUntilArrived();

	}

	console.log("It's full of gas? The solar system is running");

	
}

