const os = require('os'); 

// os modules provides us the abilty to connect to our operating system as well as server.

const user = os.userInfo();
console.log(user);
/* 
{
  uid: -1,
  gid: -1,
  username: 'USER',
  homedir: 'C:\\Users\\USER',
  shell: null
}
*/

// This console.log returns the system uptime in seconds 
console.log(`The OS uptime is ${os.uptime()} seconds`); // OUTPUTS : The OS uptime is 38004.703 seconds

const currentOS = {
    username: os.type(),
    release: os.release(), // returns the os as str 
    totalMem: os.totalmem(),
    freeMem : os.freemem(),
}

console.log(currentOS);
/* 
{
  username: 'Windows_NT',
  release: '10.0.19044',
  totalMem: 8502808576,
  freeMem: 2063753216
}
*/
