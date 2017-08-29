var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');
var path = require('path');
var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static('public'));

require("./controller/tick.js");

var port = 3000;


app.get('/', function(req,res,next) {
	res.send("hello");
});

app.get('/shuttledata', function(req,res,next) {
	res.send(universe().shuttle1.statusUpdate());
});

app.listen(port, function() {
	console.log('App running on port ' + port);
});