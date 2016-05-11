
var requestHandler = require('./requestHandler');

var appRouter = function(app) {

  app.post("/", function(req, res) {
      var response = requestHandler(req.body);
      // console.log(response);
      res.setHeader('Content-Type', 'application/json');
      res.send(response);

  });

  app.get("/", function(req, res) {
      res.send("Get method not supported");
  });

}



module.exports = appRouter;
