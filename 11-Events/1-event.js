// This is a basic template for events :

const EventEmitter = require('events'); 


const customEventEmitter = new EventEmitter(); 

 
//Adds the listener function to the end of the listeners array for the event named eventName. 
customEventEmitter.on('response' , (emitArg1, emitArg2) => { 
    console.log(`Hello world with those arguments : ${emitArg1} , ${emitArg2}`);
})

//Synchronously calls each of the listeners registered for the event named eventName, 
//in the order they were registered, passing the supplied arguments to each.
customEventEmitter.emit('response', 'Alright', 'M8!'); 


