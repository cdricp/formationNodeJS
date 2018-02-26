
const http = require("http");
const srv = http.createServer();


srv.on('request', (request,response) =>  {

    if (request.method !="GET" && request.method !="POST") {
        response.writeHead(405,{'Content-Type':'text/plain'});
        response.end();
    } 


    let body = [];

    request.on('data', (chunck)=> {
        body.push(chunck);
    }).on('end', () => {
        body= Buffer.concat(body).toString();

        if (request.url.indexOf("/echo") > -1) {
            if (body.length==0)
                response.writeHead(400,{'Content-Type':'text/plain'});
            else
                response.writeHead(200,{'Content-Type':'text/plain'});
                
            response.end(body);
        }
        else{
            response.writeHead(404,{'Content-Type':'text/plain'});
            response.end();
        } 
    });
}).listen(8081);

console.log("Running ");
