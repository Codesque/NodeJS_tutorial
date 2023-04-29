// There would be some cases that you wouldnt like to give whole of the data.
// You might want to give the portion of that data.

// For an example in a e-commerce site , there are some products. When a customer enters to a product page for more detail
// at the first load , customer only able to reach image , price and id data . Then if the customer decides to click to the
// 'comments' section , customer can see other datas that was hidden at first enterance.

const express = require('express'); 
const { products } = require('./data.js');
const app = express();

app.get('/', (req, res) => {

    const newProducts = products.map((product) => {
        const { id, name, image } = product; 
        return { id, name, image };
    })

    res.json(newProducts);

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
