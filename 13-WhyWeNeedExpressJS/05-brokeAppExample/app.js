/* OUTPUT : 
Request intended by the client : /
Request intended by the client : /styles.css
Request intended by the client : /browser-app.js
Request intended by the client : /logo.svg
*/

// In index.html file , some of the content tries to get /style.css from our server by using href tag
// We need to give every request the intended response to show our web site properly

const http = require('http'); 
const { readFileSync } = require('fs');


const homePage = readFileSync('.\\navbarApp\\index.html');
const server = http.createServer((req, res) => {

    

    console.log(`Request intended by the client : ${req.url}`);
    
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