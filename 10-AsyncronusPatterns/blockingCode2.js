const { readFile, writeFile } = require('fs');


// reading more than 1 file creates a blocking code 
// --this code wont work but I just wanted to show what it would look like :

readFile(path.join(fpath, '..\\', 'async2.txt'), 'utf-8', (err, results) => {
        
    if (err) {
        console.log(err); 
        return;
    } 

    const second = results;
    
})

readFile(path.join(fpath, '..\\', 'async2.txt'), 'utf-8', (err, results) => {
        
    if (err) {
        console.log(err); 
        return;
    } 

    const second = results;
    
})

readFile(path.join(fpath, '..\\', 'async2.txt'), 'utf-8', (err, results) => {
        
    if (err) {
        console.log(err); 
        return;
    } 

    const second = results;
    
})




