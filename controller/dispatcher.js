
//Public
module.exports = Dispatcher;


function Dispatcher(solarsystem,shuttle1, shuttle2) {

	var CurrentSolarSystem = solarsystem;

	//assign shuttles a starting location
	CurrentSolarSystem.Planets[0].shuttles.push(shuttle1);
	CurrentSolarSystem.Planets[1].shuttles.push(shuttle2);

	function sendShuttle(passenger) {
		//For now, it just sends whichever shuttle is not moving
		if(shuttle1.currentLocation === passenger.origin) { 
			shuttle1
				.pickUpPassenger(passenger)
				.sendTo(passenger.passengerDestination);
		};
		if(shuttle2.currentLocation === passenger.origin) { 
			shuttle2
				.pickUpPassenger(passenger)
				.sendTo(passenger.destination);
		};
	}  

	console.log("Trash panda reporting. Dispatcher running");
	
}

