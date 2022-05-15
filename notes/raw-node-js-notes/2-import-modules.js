// import people.js file
const sdf = require('./people');
// jehetu import hoice, people.js a console.log er values eikhaneo show krbe

// console.log(sdf);   // outputs {} i.e. an empty object

// but this will be undefined
// console.log(people)

// BUT we can access these if that module is exported
console.log(sdf);   // now outputs value of module.exports