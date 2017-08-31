# Planet Shuttle

#What is this?
--------------

This is a model of a solar system with two shuttles which move around, picking up passengers and ideally ferrying them to their destinations. The model includes a simple web interface which shows where the shuttles are and if they have picked up passengers, along with a description of each passenger when they are instantiated. A 'tick' button in the top left allows the user to advance the clock by one place, allowing the shuttles to move, pick up passengers, and drop them off when possible.

#Installation
-------------

Install using npm:

	$ npm install

The only dependencies required are expressjs for a simple webserver and express-handlebars to render data on the page.

#Usage
------

Start the model with npm

	$ npm start

Which will start the app at http://localhost:3000/ .

#Description
------------

The models directory is the core of the project, containing a file for each object. The SolarSystem.js is our main environment, which Shuttle.js the shuttle object, Passenger.js a model for any given passenger, Dispatcher.js is the control logic for assigning shuttles, and Planet.js are the planets that the shuttles travel between and where passengers begin and end their trips on. Shuttles do most of the logic for this model, moving when a tick occurs, checking and picking up passengers.

The public directory contains all of the files needed to render the page that the user sees, as well as querying the server for the status of the solar system.

The index.js file at the root of the directory handles creating the web server and instantiating the solar system, as well as being the middleman between the front end and the solar system object.

The layout of the web page was done with a simple bootstrap template, and uses handlebarsjs for rendering shuttle and passenger information on the page.

#Authors
--------
Michael Vannucci
