//This is my counter, which counts every two seconds to then run the shuttle, pick up or drop off a passenger, etc.
//The passenger requests are asyncronous, but the shuttles are run on every tick


module.exports = Tick; //This module MUST be at the end of them, since this one can only run when the others have been loaded

var SolarSystems = require("./solarsystem.js");

var mainSolarSystem = new SolarSystems(); //This is where the solar system is created

function run(SolarSystem) {
	SolarSystem.next();
	console.log("SPOOOOON! The Tick is running!");
}

setInterval(run(mainSolarSystem), 1500);