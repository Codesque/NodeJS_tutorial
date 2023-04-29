// Example for Router Parameters
const express = require('express'); 
const { products } = require('./data.js');
const app = express();

// look here
app.get('/products/:productID', (req, res) => {

    const { productID } = req.params; 

    const singleProducts = products.find((product) => product.id === Number(productID));
    if (!singleProducts) res.status(404).send('Product Does Not Exist');
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
