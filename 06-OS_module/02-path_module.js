const path = require('path'); 

console.log(path.sep); //OUTPUTS : \ (Seperator that is exclusive for the operating system type (windows , mac extc ...))

const fpath = path.join('\\froot\\', 'fchild', 'info.txt'); 
console.log(fpath); // OUTPUTS : \froot\fchild\info.txt


console.log(path.basename(fpath)); // OUTPUTS : info.txt

const absolute = path.resolve(__dirname, 'froot', 'fchild', 'info.txt'); 
console.log(absolute); // OUTPUTS : C:\Users\USER\Desktop\WebP\Self-Study\NodeJS_tutorial\06-OS_module\froot\fchild\info.txt

