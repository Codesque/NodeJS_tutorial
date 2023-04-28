const { writeFile, readFile } = require('fs'); 
const path = require('path');

const fpath = path.join('.\\froot\\', 'fchild', 'async1.txt'); 
console.log('New task has been started');
readFile(fpath, 'utf-8', (err, results) => {
    
    if (err) {
        console.log(err); 
        return;
    } 

    const first = results; 

    readFile(path.join(fpath, '..\\', 'async2.txt'), 'utf-8', (err, results) => {
        
        if (err) {
            console.log(err); 
            return;
        } 

        const second = results;

        writeFile(path.join(fpath, '..\\', 'async_data.txt'), `async1: ${first} \nasync2: ${second}`, (err, results) => {
            if (err) {
                console.log(err); 
                return; 
            }
            console.log(results);
            console.log("Task is happening in the background");
        })
        
    })
    



}); 
console.log("Task has been finished. Going for other User's tasks");
/*OUTPUTS : An Offloading example
New task has been started
Task has been finished. Going for other User's tasks
Task is happening in the background
*/