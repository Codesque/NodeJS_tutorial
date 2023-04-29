const http = require('http'); 

console.log("First"); 
const server = http.createServer((req, res) => {
    console.log("Two");
}); 
console.log("Three");
server.listen(8080, () => { 
    console.log("Four // Server is listening on 8080 port");
    
}) 
console.log("Five"); 
setInterval(() => {
    console.log("six");
}, 2000); 
console.log("Seven");


/*
---------------OUTSIDE OF THE CALLBACKS
First
Three
Five
Seven
----------------------------- LISTENING IS ALSO A CALLBACK
Four // Server is listening on 8080 port
-----------------------------   INTERVALS
six
six
six
six

*/
