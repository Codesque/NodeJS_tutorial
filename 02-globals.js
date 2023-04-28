console.log(__dirname); //C:\Users\USER\Desktop\WebP\Self-Study\NodeJS_tutorial
console.log(__filename); //C:\Users\USER\Desktop\WebP\Self-Study\NodeJS_tutorial\02-globals.js

// require      ===>    function to use modules
// module       ===>    info about current module
// process      ===>    info about env where the program is being executed


const waitSeconds = 1000;
setTimeout(() => {
    console.log("Alternative Hello World!")
},
    waitSeconds); // wait for "waitSeconds" seconds and print "Alternative Hello World!" once.


setInterval(() => {
    console.log("Hello world");
}, waitSeconds); // wait for "waitSeconds" seconds and print "Hello World!". Do this continuously (like a loop). 


// You can exit by using CTRL + C


