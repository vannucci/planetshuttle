
//Public
/* jshint node: true */
"use strict";

var Planet = require("./Planet.js");
var Shuttle = require("./Shuttle.js");
var Dispatcher = require("./Dispatcher.js");
var Passenger = require("./Passenger.js");


function SolarSystem() {

	//Keeping track of how many times .next() was clicked
	var tickCounter = 0;

	//All passengers in the solar system array
	this.allPassengers = [];

	this.planets = [ //Instantiating new planets in their spot on the planetary array

		new Planet("Mercury",0), //Each entry is a new planet object
		new Planet("Venus", 1),
		new Planet("Earth", 2),
		new Planet("Mars", 3)


	]; //Solar system contains four planets

	//All the shuttles in our solar system
	this.shuttles = [];

	//Each shuttle is instantiated, named after the NASA ladies from Hidden Values
	this.shuttles.push(new Shuttle("Johnson",0,1,this)); //Two new shuttles are created when the solar system is initialized
	this.shuttles.push(new Shuttle("Vaughn",2,2,this)); //Hopefully these ladies will help me

	this.dispatcher = new Dispatcher(this,this.shuttles[0],this.shuttles[1]); //Instantiate a new dispatcher, pass in the solar system and the two shuttles


	 //When a passenger is created, they are instantiated and then added to the planet's passengers array
	this.createNewPassenger = function(name,origin,direction) {
		var newPassenger = new Passenger(name, origin, direction, this); //The passenger object is created
		this.planets[origin].queuePassenger(newPassenger);
		this.allPassengers.push({"name":name,"origin":origin,"direction":direction,"ticket":newPassenger.request()});
		return newPassenger;
	};

	//Write the tick count, advance each pilot forward
	this.next = function() {
		console.log("Tick " + tickCounter);
		this.shuttles[0].pilot();
		this.shuttles[1].pilot();
		tickCounter++;

	};

	console.log("Solar System is running");

	
}

module.exports = SolarSystem;

