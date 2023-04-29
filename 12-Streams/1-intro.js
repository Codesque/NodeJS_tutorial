// Streams are used to read and write esspecially big datas sequentially
// There are 4 types of streams in nodeJS :
    //  Writeable : Used to write data sequentially 
    //  Readable  : Used to read data sequentially 
    //  Duplex    : Used to read and write data sequentially 
    //  Transform : It is a stream which gives us the ability to modify data while reading/writing the data 
    
    
// Streams extends from the EventEmitter class 
    // Simply means we can use events like data on streams . 
    
    
// Reading file data from async is a little dangerous. async reads everything on the file. If the file is too big , 
// it starts to give errors because 1 variable is not enough to hold that amount of data. 
// So basiclly we can use streams to read a part of the file instead of reading it fully. 

const { createReadStream } = require('fs'); 

const stream = createReadStream('.\\12-Streams\\big_data.txt'); 

stream.on('data', (result) => {
    console.log(result);
}) 
/* 
<Buffer 54 68 69 73 20 69 73 20 74 68 65 20 64 61 74 61 20 30 20 0a 54 68 69 73 20 69 73 20 74 68 65 20 64 61 74 61 20 31 20 0a 54 68 
69 73 20 69 73 20 74 68 ... 65486 more bytes>
<Buffer 61 20 32 38 39 37 20 0a 54 68 69 73 20 69 73 20 74 68 65 20 64 61 74 61 20 32 38 39 38 20 0a 54 68 69 73 20 69 73 20 74 68 65 
20 64 61 74 61 20 32 38 ... 65486 more bytes>
<Buffer 68 69 73 20 69 73 20 74 68 65 20 64 61 74 61 20 35 37 34 37 20 0a 54 68 69 73 20 69 73 20 74 68 65 20 64 61 74 61 20 35 37 34 
38 20 0a 54 68 69 73 20 ... 65486 more bytes>
<Buffer 65 20 64 61 74 61 20 38 35 39 36 20 0a 54 68 69 73 20 69 73 20 74 68 65 20 64 61 74 61 20 38 35 39 37 20 0a 54 68 69 73 20 69 
73 20 74 68 65 20 64 61 ... 32232 more bytes>

*/


    
