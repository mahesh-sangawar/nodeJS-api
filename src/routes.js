
var requestHandler = require('./requestHandler');

var appRouter = function(app) {

  app.use (function (error, req, res, next){
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 400
    res.send({
      "error": "Could not decode request: JSON parsing failed"
    });
});


  app.post("/", function(req, res) {
      var response = requestHandler(req.body);


      res.setHeader('Content-Type', 'application/json');
      res.send(response);

  });

  app.get("/", function(req, res) {
      res.send("Get method not supported");
  });

}



module.exports = appRouter;
