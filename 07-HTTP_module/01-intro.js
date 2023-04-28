const http = require('http');

// req / stands for request . Request is smthn for an example , A client is requesting from the web browser your web page
    // You'll have information about the method and all kinds of usefull stuff in that request object
    
// res / stands for response .
    //It is what we are sending back to client
    
// you have to declare the port by server.listen() after creating the server
const server = http.createServer((req, res) => {
    if (req.url === "/") res.end("Welcome to our home page");
    else if (req.url === "/about") res.end("These are my contact infos : *********");
    else res.end(`
    <h1>Oooups!</h1> 
    <p>We cant seem to find the page that you are looking for</p> 
    <a href="/">back home</a> 
    `);
    
})

server.listen(8080);