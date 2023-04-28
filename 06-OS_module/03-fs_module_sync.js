// There are 2 types of file system modules
    // ASyncronized : which is non-blocking 
    // Syncronized  : which is blocking 
    
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const path1 = path.join('.\\froot\\', 'fchild', 'swap1.txt');
const path2 = path.join('.\\froot\\', 'fchild', 'swap2.txt');

console.log('New task has been started');
let firstTxt = readFileSync( path1, 'utf-8'); //Hello World ! I was created in swap1. 
let secondTxt = readFileSync( path2 , 'utf-8'); //Alright M8 ! I were born in swap2! 

//console.log("Before Change :--------------------------------------- \n",firstTxt, '\n', secondTxt , '\n'); 

let temp = firstTxt; 
firstTxt = secondTxt; 
secondTxt = temp; 

writeFileSync(path1, firstTxt); 
writeFileSync(path2, secondTxt); 
console.log("Task is happening in the background");
//console.log("After Change :--------------------------------------- \n", firstTxt, '\n', secondTxt, '\n');


console.log("Task has been finished. Going for other User's tasks");
/* OUTPUT ::: 
New task has been started
Task is happening in the background
Task has been finished. Going for other User's tasks 
*/




// Normally this writeFS function overwrites the txt file rather than appending data.
// If you want to append data rather than overwriting it , use {flag : 'a'} as a third argument to the method writeFS
// writeFileSync(path1, firstTxt , {flag:'a'});




