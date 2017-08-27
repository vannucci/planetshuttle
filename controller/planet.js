
//Public
module.exports = Planet;


function Planet(name, position) {
	this.name = name;
	this.position = position; //A number from 0 to 3 indicating the planet it is at
	this.passengers = []; //An array of passengers, so the newest can be placed onto the list, and then popped off the beginning
	this.shuttles = []; //An array containing all the shuttles on this planet

	//The arrays of passengers and shuttles may not be useful, since those two objects have come to track
	//their own locations independently, FWIW

	console.log("Sailor " + this.name + " reporting!");

	
}

