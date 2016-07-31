var vertx = require('vertx')

vertx.createHttpServer().requestHandler(function(req) {
	req.response.headers['Content-Type'] = "text/plain";
	req.response.end("Hello Word, this is VertX for Sigel");
}).listen(8080);

