var Router = require("vertx-web-js/router");
var server = vertx.createHttpServer();

var router = Router.router(vertx);

router.get("/").handler(function (ctx) {
  // This handler will be called for "/" requests
  var response = ctx.response();
  response.putHeader("content-type", "text/plain");

  // Write to the response and end it
  response.end("Hello World! by Sigel Verticle 2");
});

server.requestHandler(router.accept).listen(8080);