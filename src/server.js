

var http = require('http');

var express = require("express");
var bodyParser = require("body-parser");


var app = express();

app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.json());

var routes = require("./routes.js")(app);

var serverConfig = function(PORT) {
  var server = http.createServer(app);

  app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });

	return server;
}

module.exports = serverConfig;
