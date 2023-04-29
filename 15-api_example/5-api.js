// Example for Query Strings
const express = require('express'); 
const { products } = require('./data.js');
const app = express();

// look here
app.get('/api/v1/query', (req, res) => {

    const { search, limit } = req.query; 
    let sortedProducts = [...products]

    if (search)
        sortedProducts = sortedProducts.filter((product) => { return product.name.startsWith(search); }); 
    
    if (limit)
        sortedProducts = sortedProducts.slice(0, Number(limit)); 
    
    if (sortedProducts.length < 1) 
        return res.status(200).json({ success: true, data: [] }); 

    return res.status(200).json(sortedProducts);
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
