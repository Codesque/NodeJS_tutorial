const logger1 = (req, res, next) => {
    console.log("Authorization has been started"); 
    next();
}

const logger2 = (req, res, next) => {
    const method = req.method; 
    const url = req.url; 
    const time = new Date().getFullYear(); 

    console.log(`Logged:${method}\trequested:${url}\tat:${time}`);
    next();
}

module.exports = { logger1, logger2 };