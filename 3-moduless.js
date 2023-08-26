// commonjs,every file is module
// modules - encapsulted code

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
console.log(data);

require('./7-mind-grenade');

// sayHi('Gautam');
// sayHi(names.john);
// sayHi(names.peter);