const { createReadStream } = require('fs'); 

const stream = createReadStream('.\\12-Streams\\big_data.txt', { highWaterMark: 90000 }); 
//const stream = createReadStream('.\\12-Streams\\big_data.txt', { encoding: 'utf-8' });

//chunks of readable data are 64KB by default ( 64 KB = 50 + 65486 = 65536)
//last buffer is the remainder of (data/chunk) 
//highwatermark flag controlls chunk size 


stream.on('data', (result) => {
    console.log(result);
}) 

stream.on('error', (err)=>{
    console.log(err);
})

/* 
<Buffer 54 68 69 73 20 69 73 20 74 68 65 20 64 61 74 61 20 30 20 0a 54 68 69 73 20 69 73 20 74 68 65 20 64 61 74 61 20 31 20 0a 54 68 
69 73 20 69 73 20 74 68 ... 89950 more bytes>
<Buffer 20 74 68 65 20 64 61 74 61 20 33 39 36 31 20 0a 54 68 69 73 20 69 73 20 74 68 65 20 64 61 74 61 20 33 39 36 32 20 0a 54 68 69 
73 20 69 73 20 74 68 65 ... 89950 more bytes>
<Buffer 74 68 65 20 64 61 74 61 20 37 38 37 34 20 0a 54 68 69 73 20 69 73 20 74 68 65 20 64 61 74 61 20 37 38 37 35 20 0a 54 68 69 73 
20 69 73 20 74 68 65 20 ... 48840 more bytes>
*/