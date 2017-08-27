var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');
var path = require('path');
var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static('public'));

var tick = require("./controller/tick.js");
tick.run();



var port = 3000;


app.get('/', function(req,res,next) {
	res.send("hello");
});

app.listen(port, function() {
	console.log('App running on port ' + port);
});