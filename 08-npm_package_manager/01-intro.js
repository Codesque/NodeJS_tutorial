// npm - global command comes with the node
// npm --version

// local dependency : use it only in this particular project
/*  npm i   _package_name_  */

//  global dependency : use it in any project
/*  npm install -g _package_name_  //for windows// */

// Before downloading packages , you need to install package.json to hold what are the dependencies you are holding on

// npm init (step by step , press enter to skip)
// npm init -y (everything default)

/* NOTE : If you are trying to install a package that depends on other packages , In the package json , sub-requirements that 
comes within that packages won't shows up (example giving , while bootstrap depends on other packages , lodash doesnt)  
*/

const _ = require('lodash'); 
let arr = [4, [3, [2, [1, [0]]]]]; 
console.log(`arr.length = ${arr.length} \n_.flattenDeep(arr).length = ${_.flattenDeep(arr).length}`);
// arr.length = 2 
// _.flattenDeep(arr).length = 5