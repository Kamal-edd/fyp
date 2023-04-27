const http = require("http");

const server = http.createServer(function(req, res) {
   res.writeHead(200, { "Content-Type": "text/plain" });
   res.write("ana yaser");
   res.end();
});

server.listen(1234, function() {
   console.log("Server listening on port 1234");
});
