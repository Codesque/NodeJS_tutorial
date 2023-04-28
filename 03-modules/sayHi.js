const sayHi = (name) => {
    console.log(`Hi there ${name}! \n`);
}; 

module.exports = sayHi; 


console.log(module);
/* OUTPUT :
Module {
  id: '.',
  path: 'C:\\Users\\USER\\Desktop\\WebP\\Self-Study\\NodeJS_tutorial\\03-modules',
  exports: [Function: sayHi],
  filename: 'C:\\Users\\USER\\Desktop\\WebP\\Self-Study\\NodeJS_tutorial\\03-modules\\sayHi.js',
  loaded: false,
  children: [],
  paths: [
    'C:\\Users\\USER\\Desktop\\WebP\\Self-Study\\NodeJS_tutorial\\03-modules\\node_modules',
    'C:\\Users\\USER\\Desktop\\WebP\\Self-Study\\NodeJS_tutorial\\node_modules',
    'C:\\Users\\USER\\Desktop\\WebP\\Self-Study\\node_modules',
    'C:\\Users\\USER\\Desktop\\WebP\\node_modules',
    'C:\\Users\\USER\\Desktop\\node_modules',
    'C:\\Users\\USER\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules'
  ]
}


*/
