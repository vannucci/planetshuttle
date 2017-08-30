/* jshint node: true */
"use strict";

var express = require("express");
var exphbs = require('express-handlebars');
var app = express();

app.engine("handlebars", exphbs({ 
									extname: 'handlebars',
									defaultLayout: "main",
									layoutsDir: './views'
								}));

app.set("view engine", "handlebars");
app.use(express.static('public'));

var SolarSystem = require("./model/SolarSystem.js");
var activeSolarSystem = new SolarSystem();

var port = 3000;


app.get('/', function(req,res) {
	/*
	var shuttleStatus = [
		activeSolarSystem.shuttle1.statusUpdate(),
		activeSolarSystem.shuttle2.statusUpdate()
	];
	*/

	var shuttle1Status = activeSolarSystem.shuttles[0].statusUpdate();

	var shuttle2Status = activeSolarSystem.shuttles[1].statusUpdate();

	var allData = {
		shuttle1: {
			id1: shuttle1Status.id,
			pickUplocations1: shuttle1Status.pickUpLocation,
			whereGoing1: shuttle1Status.destination,
			location1: shuttle1Status.currentLocation,
			velocity1: shuttle1Status.velocity,
			direction1: shuttle1Status.direction,
			arrived1: shuttle1Status.arrived,
			passengers1: shuttle1Status.passengers.length		
		},
		shuttle2: {
			id2: shuttle2Status.id,
			pickUplocations2: shuttle2Status.pickUpLocation,
			whereGoing2: shuttle2Status.destination,
			location2: shuttle2Status.currentLocation,
			velocity2: shuttle2Status.velocity,
			direction2: shuttle2Status.direction,
			arrived2: shuttle2Status.arrived,
			passengers2: shuttle2Status.passengers.length		
		}

	};

	res.render('main', allData);

});

app.get('/tick', function(req,res) {
	activeSolarSystem.next();
	res.redirect('/');
});

app.get('/newPassenger', function(req,res) {
	activeSolarSystem.createNewPassenger("GlaDOS",1);
	res.redirect('/');
});

app.get('/allPassengers', function(req,res) {
	var allPassengers = activeSolarSystem.getAllPassengers();
	res.send(allPassengers);
});

app.listen(port, function() {
	console.log('App running on port ' + port);
});