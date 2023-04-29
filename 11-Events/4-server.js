const http = require('http');



// servers are actually an EventEmitter. You can use .on() or .emit() methods to it.
const server = http.createServer(); //This is also called SERVER EMITTER API


// subsribe to it , listen to it , respond to it
server.on('request' ,(req, res) => {
    if (req.url === "/") res.end("Welcome to our home page");
    else if (req.url === "/about") res.end("These are my contact infos : *********");
    else res.end(`
    <h1>Oooups!</h1> 
    <p>We cant seem to find the page that you are looking for</p> 
    <a href="/">back home</a> 
    `);
})



server.listen(8080);