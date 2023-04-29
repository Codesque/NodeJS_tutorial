// MIDDLEWARE

// Middlewares are the functions that execute during the request to the server
// Each middleware func. has access to the request and response object

// Middleware functions execute some code that can have side effects on the app, and usually add information to the request or response
// objects.They are also capable of ending the cycle by sending a response when some condition is satisfied.
// If they don’t send the response when they are done, they start the execution of the next function in the stack.
// This triggers calling the 3rd argument, next().

// Middleware functions take 2 arguments
// 1.path 
// 2.callback function that contains the request object, response object, and next() function to call the next middleware function 
// if the response of the current middleware is not terminated.In the second parameter, 
// we can also pass the function name of the middleware.


const express = require('express'); 

const app = express();

const logger = (req, res, next) => {
    const method = req.method; 
    const url = req.url; 
    const time = new Date().getFullYear(); 

    console.log(`Logged:${method}\trequested:${url}\tat:${time}`);
    next();
}


app.get('/middleware', logger, (req, res) => {

    res.end("Dont forget to use next() If your middleware function is not terminating a response");

}) 

app.get('/', (req, res) => {
    res.status(200).send('Welcome to home page');
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource Not Found</h1>');
})

app.listen(8080, () => {
    console.log('server is listening on port 8080');
})
