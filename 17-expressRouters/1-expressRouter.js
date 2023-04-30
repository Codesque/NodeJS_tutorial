const express = require('express');

const app = express(); 
const rt = require('./1-routers.js');

app.use('/product/api', rt); 

app.get('/', (req, res) => {
    res.send('welcome to home page');
})

app.listen(8080);