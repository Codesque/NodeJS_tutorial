const express = require('express'); 
const app = express();

// OR YOU CAN USE THIS :
//const app = require('express')();

//  app.get
//  app.post
//  app.listen
//  app.all

//  app.use
//  app.delete
//  app.put

app.get('/', (req, res) => {
    res.status(200).send('Welcome to home page');
    
}) 

app.get('/about'(req, res => {
    res.status(200).send('Welcome to about page');
}))

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource Not Found</h1>');
})

app.listen(8080, () => {
    console.log('server is listening on port 8080');
})

