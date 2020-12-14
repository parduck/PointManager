var express = require("express"),
  http = require("http");

var app = express();
app.set("port", process.env.PORT || 3003);

http.createServer(app).listen(app.get("port"), function() {
  console.log("express server started.." + app.get("port"));
});
