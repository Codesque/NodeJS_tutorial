//ORDER MATTERS : To check the event correctly , you need to emit at the end.
// calling emit at the beggining wont call listeners because in those conditions this means we didnt add a listener with the 
// .on() method

const EventEmitter = require('events'); 


const customEventEmitter = new EventEmitter(); 

customEventEmitter.emit('response', 'Alright', 'M8!'); 

customEventEmitter.on('response' , (emitArg1, emitArg2) => { 
    console.log(`Hello world with those arguments : ${emitArg1} , ${emitArg2}`);
})

customEventEmitter.emit('response', 'Good', 'Morning y`all '); 

customEventEmitter.on('response' , () => { 
    console.log('Same event listener but has different arguments and different logic');
})

customEventEmitter.emit('response', 'Happy', 'Birthday');




/* outputs : 
Hello world with those arguments : Good , Morning y`all
Hello world with those arguments : Happy , Birthday
Same event listener but has different arguments and different logic
*/

