const express = require('express'); 

const router = express.Router();

router.get('/', (req , res) => {
    res.send('Hello world with express routers');
}) 

module.exports = router;