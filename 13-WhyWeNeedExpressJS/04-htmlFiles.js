const http = require('http'); 
const { readFileSync } = require('fs');


const homePage = readFileSync('.\\index.html');
const server = http.createServer((req, res) => {

    // for more info about various response status codes : https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    
    if (req.url === "/") {
        
        res.writeHead(200, { 'content-type': "text/html" }); // handle data as html
        
        res.write(homePage);
        res.end();
    }

    else if (req.url === "/plain") {
        res.writeHead(200, { 'content-type': "text/plain" }); // handle data as plain txt
        
        res.write(homePage);
        res.end();
        
    }
    else {
        res.writeHead(404, { 'content-type': "text/html" }); // handle data as html
        
        res.write("<h1>Not found</h1>");
        res.end();

    }



}) 

server.listen(8080);