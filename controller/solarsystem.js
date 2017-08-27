
//Public
module.exports = SolarSystem;

var Planet = require("./planet.js");
var Shuttle = require("./shuttle.js");
var Dispatcher = require("./dispatcher.js");
var Passenger = require("./passenger.js");


function SolarSystem() {

	var Planets = [

		new Planet("Mercury",0), //Each entry is a new planet object
		new Planet("Venus", 1),
		new Planet("Earth", 2),
		new Planet("Mars", 3)


	] //Solar system contains four planets

	var shuttle1 = new Shuttle("Johnson",0); //Two new shuttles are created when the solar system is initialized
	var shuttle2 = new Shuttle("Vaughn",2); //Hopefully these ladies will help me

	var dispatcher = new Dispatcher(this,shuttle1,shuttle2); //Instantiate a new dispatcher, pass in the solar system and the two shuttles

	function next() {
		shuttle1.moveUntilArrived();
		shuttle2.moveUntilArrived();

	}

	console.log("It's full of gas? The solar system is running");

	
}

