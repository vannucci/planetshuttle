
//Public

var Planet = require("./planet.js");
var Shuttle = require("./shuttle.js");
var Dispatcher = require("./dispatcher.js");
var Passenger = require("./passenger.js");

module.exports = SolarSystem;

function SolarSystem() {

	this.getAllPassengers = function() {
		var allPassengers = {};
		for(var i = 0; i < this.Planets.length; i++) {
			allPassengers['Planet ' + i] = { i:this.Planets[i].getPassengers };
		}
		return allPassengers;
	}

	this.Planets = [ //Instantiating new planets in their spot on the planetary array

		new Planet("Mercury",0), //Each entry is a new planet object
		new Planet("Venus", 1),
		new Planet("Earth", 2),
		new Planet("Mars", 3)


	] //Solar system contains four planets

	this.shuttle1 = new Shuttle("Johnson",0,1,this); //Two new shuttles are created when the solar system is initialized
	this.shuttle2 = new Shuttle("Vaughn",2,2,this); //Hopefully these ladies will help me

	this.dispatcher = new Dispatcher(this,this.shuttle1,this.shuttle2); //Instantiate a new dispatcher, pass in the solar system and the two shuttles


	this.createNewPassenger = function(name,origin) { //When a passenger is created, they are instantiated and then added to the planet's passengers array
		var newPassenger = new Passenger(name, origin, this); //The passenger object is created
		this.Planets[origin].queuePassenger(newPassenger);
		return newPassenger;
	}

	this.next = function() {
		console.log("NEXT!");
		this.shuttle1.pilot();
		this.shuttle2.pilot();

	}

	console.log("It's full of gas? The solar system is running");

	
}

