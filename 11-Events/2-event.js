//Multiple calls passing the same combination of eventName and 
//listener will result in the listener being added, and called, multiple times. 

const EventEmitter = require('events'); 


const customEventEmitter = new EventEmitter(); 

customEventEmitter.on('response' , (emitArg1, emitArg2) => { 
    console.log(`Hello world with those arguments : ${emitArg1} , ${emitArg2}`);
})
customEventEmitter.on('response' , () => { 
    console.log('Same event listener but has different arguments and different logic');
})



customEventEmitter.emit('response', 'Alright', 'M8!'); 

/* outputs : 
Hello world with those arguments : Alright , M8!
Same event listener but has different arguments and different logic
*/

