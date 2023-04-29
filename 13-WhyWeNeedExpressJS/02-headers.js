const http = require('http'); 


const server = http.createServer((req, res) => {
    
    // headers are the metadata of the response. It gives additional information such as how the data should be handled. 
    // Status code in the headers also called media type / mime type.
    res.writeHead(200, { 'content-type': "text/html" }); // handle data as html
    //res.writeHead(200, { 'content-type': "text/plain" }) // handle data as plain text
    res.write("<h1>Hello World</h1>");
    res.end();

}) 

server.listen(8080);