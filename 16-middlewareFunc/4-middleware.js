const express = require('express');  
const { logger1, logger2 } = require('./multiple_loggers.js');



const app = express(); 
app.use([logger1, logger2]);//sequence matters 

app.get('/', (req, res) => {
    res.status(200).send(`HelloWorld!`);
})

app.get('/alabama', (req, res) => {
    res.status(200).send(`HelloAlabama!`);
})



app.listen(8080);