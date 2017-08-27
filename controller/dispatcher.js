
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

		return true;

		var shuttle1score = Math.sign(shuttle1.velocity) * ( passenger.origin - shuttle1.currentLocation);
		var shuttle2score = Math.sign(shuttle2.velocity) * ( passenger.origin - shuttle2.currentLocation);

		if(shuttle1score <= shuttle2score) {
			shuttle1.queueDestination(passenger.passengerDestination);
		} else {
			shuttle2.queueDestination(passenger.passengerDestination);
		}

	}  

	console.log("Trash panda reporting. Dispatcher running");
	
}

