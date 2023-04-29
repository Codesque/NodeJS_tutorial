const express = require('express'); 
const logger = require('./logger.js');
const app = express();

// This middleware will be used globally if you use app.use without any path parameter. 
app.use(logger);


app.get('/products', (req, res) => {
    res.send(`<h1>You are in ${req.url}</h1>`);
}) 

app.get('/utilities', (req, res) => {
    res.send(`<h1>You are in ${req.url}</h1>`);

}) 

app.get('/api/v1/query', (req, res) => {
    res.send(`<h1>You are in ${req.url}</h1>`);

}) 

app.get('/api/v2/forum', (req, res) => {
    res.send(`<h1>You are in ${req.url}</h1>`);

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
