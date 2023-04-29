// non-blocking code with async await without wrappers

const { readFile, writeFile } = require('fs'); 
const util = require('util'); 

const readFilePromisify = util.promisify(readFile); 
const writeFilePromisify = util.promisify(writeFile); 

const start = async () => {
    
    try {
        const first = await readFilePromisify('.\\10-AsyncronusPatterns\\secret.txt' , 'utf-8'); 
        await writeFilePromisify('.\\10-AsyncronusPatterns\\realSecret.txt',
            `The secret is that you dont have to use readFile wrappers . They have so much nesting parantesis that you wouldnt like to use`
        );
        console.log(first);
        
    }
    catch (error) { 
        console.log(error);
    }
}

start();