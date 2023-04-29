const express = require('express'); 
const path = require('path');

const app = express();

app.use(express.static('.\\navbarApp'));

/*
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'navbarApp', 'index.html'));

}) 
*/
app.get('/about', (req, res) => {
    res.status(200).send('Welcome to about page');
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource Not Found</h1>');
})

app.listen(8080, () => {
    console.log('server is listening on port 8080');
})

