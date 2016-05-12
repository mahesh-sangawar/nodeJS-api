
var requestHandler = require('./requestHandler');

var appRouter = function(app) {

  app.use (function (error, req, res, next){
    res.setHeader('Content-Type', 'application/json');

    res.status(400).send({
      "error": "Could not decode request: JSON parsing failed"
    });
  });


  app.post("/", function(req, res) {
      var response = requestHandler(req.body);

      res.setHeader('Content-Type', 'application/json');
      res.send(response);

  });

  app.get("/", function(req, res) {
      res.statusCode = 400;
      res.send("Get method not supported");
  });

  app.put("/", function(req, res) {
      res.statusCode = 400;
      res.send("Put method not supported");
  });

}



module.exports = appRouter;
