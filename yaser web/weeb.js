const http = require("http");

const server = http.createServer(function(req, res) {
   res.setHeader("content-type", "appllication/json");
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.writeHead(200);

   let dataObj = { id: 2004, name:"yaser", emial:"yaseryjjou@gmail.com"};
   let data = JSON.stringify(dataObj);
   res.end(data);
});
server.listen(1234, function(){
console.log("Lestening on port 1234");
});