const http = require('http'); 
const { readFileSync } = require('fs');


const homePage = readFileSync('.\\navbarApp\\index.html');
const homeStyle = readFileSync('.\\navbarApp\\styles.css');
const homeLogo = readFileSync('.\\navbarApp\\logo.svg'); 
const homeLogic = readFileSync('.\\navbarApp\\browser-app.js');

const server = http.createServer((req, res) => {

    

    console.log(`Request intended by the client : ${req.url}`);
    
    if (req.url === "/") {
        
        res.writeHead(200, { 'content-type': "text/html" }); 
        
        res.write(homePage);
        res.end();
    }

    else if (req.url === "/styles.css") {
        res.writeHead(200, { 'content-type': "text/css" }); 
        
        res.write(homeStyle);
        res.end();
        
    }
    else if (req.url === "/logo.svg") {
        res.writeHead(200, { 'content-type': "image/svg+xml" }); 
        
        res.write(homeLogo);
        res.end();
        
    }
    else if (req.url === "/browser-app.js") {
        res.writeHead(200, { 'content-type': "text/javascript" }); 
        
        res.write(homeLogic);
        res.end();
        
    }
    else {
        res.writeHead(404, { 'content-type': "text/html" }); // handle data as html
        
        res.write("<h1>Not found</h1>");
        res.end();

    }



}) 

server.listen(8080);