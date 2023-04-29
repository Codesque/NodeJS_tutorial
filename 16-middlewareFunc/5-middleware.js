const express = require('express'); 
const app = express(); 

const authorize = (req, res, next) => {
      
    const { user } = req.query;  
    if (user === 'john') {
        req.user = { name: 'john', id: 3 }; 
        next();
    } 

    else {
        res.status(401).send("Unauthorized");
    }





}



app.get('/', (req, res) => { 
    
    res.send("Sign in Page");
    
})

app.get('/login', authorize ,  (req, res) => { 
    
    res.send("Login Page");
    // url = http://localhost:8080/login?user=john = will login to the page 
    // url = http://localhost:8080/login?user=bob = will give unauthorized error. 
    
})

app.listen(8080);