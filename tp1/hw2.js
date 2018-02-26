
var http = require("http");
var myMod = require('./module1')
http.createServer(function(request, response) {
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end(myMod.GetString("toto"));
}).listen(8081);

console.log("Running ");
