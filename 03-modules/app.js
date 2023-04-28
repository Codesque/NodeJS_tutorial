// every file in node is a module (in the perspective of NODEJS)
// every module is encapsulated (means modules are only shared minimum , we have to declare which ones to be shared or not)

const names = require('./names'); 
// console.log(names); // OUTPUTS : { ali: 'Ali', ayse: 'Ayse' }

const print = require('./sayHi'); 
print(names.ali); // OUTPUTS : Hi there Ali! 
print(names.ayse);// OUTPUTS : Hi there Ayse!

