var http = require("http");
http.createServer(function (req, resp) {
   resp.writeHead(200, {'Content-Type': 'text/plain'});
   resp.end('Hello World');
}).listen(8000);
