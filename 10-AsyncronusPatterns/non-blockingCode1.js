const { readFile, writeFile } = require("fs"); 



const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err) reject(err);
            else resolve(data); 
        })
    })
}

/*  just using promises still expensive . We need to use promises with async await
getText('.\\10-AsyncronusPatterns\\secret.txt')
    .then((result) => console.log(result))
    .catch((err) => console.log(err)); 

// OUTPUT : The secret is there is no secret in this txt file.
*/

const start = async () => {
    try {
        const first = await getText('.\\10-AsyncronusPatterns\\secret.txt');
        console.log(first);
    }
    catch (err) {
        console.log(err);
    } 

}

start(); // OUTPUT : The secret is there is no secret in this txt file.
