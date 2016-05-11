

var http = require('http');

var express = require("express");
var bodyParser = require("body-parser");


var app = express();

app.use(bodyParser.json());

var routes = require("./routes.js")(app);

var serverConfig = function(PORT) {
  var server = http.createServer(app);

	if(PORT) {
	   server.listen( PORT );
	}

	return server;
}

module.exports = serverConfig;
