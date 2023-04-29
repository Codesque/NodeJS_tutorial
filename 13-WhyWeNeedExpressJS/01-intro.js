

const http = require('http'); 


const server = http.createServer((req, res) => {
    res.end("Hello World");
    //This method signals to the server that all of the response headers and body have been sent;
    //that server should consider this message complete.The method, response.end(), MUST be called on each response.
}) 

server.listen(8080);