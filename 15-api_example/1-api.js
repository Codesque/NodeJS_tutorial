// main idea with apis is that our server provides data and what that
// means that any front end app that wants to access it and use it can
// simply perform a http request and using our data , set up the api
// and functionality


const express = require('express'); 
const { products } = require('./data.js');
const app = express();

app.get('/', (req, res) => {
    res.json(products);

}) 

app.get('/about', (req, res) => {
    res.status(200).send('Welcome to about page');
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource Not Found</h1>');
})

app.listen(8080, () => {
    console.log('server is listening on port 8080');
})

