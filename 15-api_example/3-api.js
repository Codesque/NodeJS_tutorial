// Reaching one single product
const express = require('express'); 
const { products } = require('./data.js');
const app = express();

app.get('/product/1', (req, res) => {

    const singleProducts = products.find((product) =>  product.id === 1 );
    res.json(singleProducts);

}) 

app.get('/', (req, res) => {
    res.status(200).send('Welcome to about page');
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource Not Found</h1>');
})

app.listen(8080, () => {
    console.log('server is listening on port 8080');
})
