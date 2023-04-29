const http = require('http'); 


const server = http.createServer((req, res) => {

    // for more info about various response status codes : https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    
    if (req.url === "/") {
        
        res.writeHead(200, { 'content-type': "text/html" }); // handle data as html
        
        res.write("<h1>Welcome to home page</h1>");
        res.end();
    }

    else if (req.url === "/about") {
        res.writeHead(200, { 'content-type': "text/html" }); // handle data as html
        
        res.write("<h1>This is 'about' page </h1>");
        res.end();
        
    }
    else {
        res.writeHead(404, { 'content-type': "text/html" }); // handle data as html
        
        res.write("<h1>Not found</h1>");
        res.end();

    }



}) 

server.listen(8080);