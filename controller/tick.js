//This is my counter, which counts every two seconds to then run the shuttle, pick up or drop off a passenger, etc.
//The passenger requests are asyncronous, but the shuttles are run on every tick


module.exports = universe; //This module MUST be at the end of them, since this one can only run when the others have been loaded


function universe() {

	var SolarSystems = require("./solarsystem.js");

	var mainSolarSystem = new SolarSystems(); //This is where the solar system is created

	function makeTickFunction(SolarSystem) { //I'm doing this because set interval wants a reference to a function, and I want to DO something with the solar system object in that reference
		return function() {
			SolarSystem.next();
			console.log("SPOOOOON! The Tick is running!");
		}
	}

	setInterval(makeTickFunction(mainSolarSystem), 1500);

	return "Let there be light";

}

