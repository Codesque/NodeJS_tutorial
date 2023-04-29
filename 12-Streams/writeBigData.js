const { writeFileSync } = require('fs'); 

for (let i = 0; i < 10000; i++) writeFileSync("big_data.txt", `This is the data ${i} \n`, { flag: 'a' }); 
