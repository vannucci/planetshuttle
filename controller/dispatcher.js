
//Public
module.exports = Dispatcher;


function Dispatcher(solarsystem,shuttle1, shuttle2) {

	var CurrentSolarSystem = solarsystem;

	//assign shuttles a starting location
	//CurrentSolarSystem.Planets[0].shuttles.push(shuttle1);
	//CurrentSolarSystem.Planets[1].shuttles.push(shuttle2);
	//^^^^ Note at 8:50 on Sunday, this whole section might be deprecated since the shuttles know where they are

	this.sendShuttle = function (passenger) {
		//For now, it just sends whichever shuttle is not moving
		console.log("Dispatcher here! Request for shuttle from " + passenger.name + " has been made from " + passenger.origin + " to " + passenger.passengerDestination);

		var shuttle1score = Math.sign(shuttle1.velocity) * ( passenger.origin - shuttle1.currentLocation);
		console.log("Shuttle score 1 " + shuttle1score);
		var shuttle2score = Math.sign(shuttle2.velocity) * ( passenger.origin - shuttle2.currentLocation);
		console.log("Shuttle score 2 " + shuttle2score)


		if(shuttle1score <= shuttle2score && !isNaN(shuttle1score)) {
			shuttle1.queuePickupLocation(passenger.passengerDestination);
			console.log("Shuttle 1 assigned with destination " + passenger.passengerDestination);
			return 1; //return the ticket number
		} else if(!isNaN(shuttle2score)) {
			shuttle2.queuePickupLocation(passenger.passengerDestination);
			console.log("Shuttle 2 assigned with destination " + passenger.passengerDestination);
			return 2; //return the ticket number
		} else {
			return 0;
		}

	}  

	console.log("Trash panda reporting. Dispatcher running");
	
}

