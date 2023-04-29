const http = require('http'); 

const server = http.createServer((req, res) => {
    if (req.url === "/") res.end("Home Page");
    else if (req.url === "/about") {
        for (let i = 0; i < 1000; i++)
            for (let j = 0; j < 1000; j++)
                for (let k = 0; k < 1000; k++)
                    console.log(`${i} ${j} ${k}`);
        
        res.end("Blocking content causing other customer to not to get the result within the intended time");
    }
    else res.end("Error Page");
})

server.listen(8080); 
