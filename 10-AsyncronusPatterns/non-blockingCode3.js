// non-blocking code with async await without wrappers and util methods

const { readFile, writeFile } = require('fs').promises; 
//const util = require('util'); 

//const readFilePromisify = util.promisify(readFile); 
//const writeFilePromisify = util.promisify(writeFile); 

const start = async () => {
    
    try {
        const first = await readFile('.\\10-AsyncronusPatterns\\secret.txt' , 'utf-8'); 
        await writeFile('.\\10-AsyncronusPatterns\\megaRealSecret.txt',
            `The secret is that you dont have to use util methods exclusively. This is much more clean and readible`
        );
        console.log(first);
        
    }
    catch (error) { 
        console.log(error);
    }
}

start();