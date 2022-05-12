// import people.js file
// const ppl = require('./people');
// full object na ene, sudhu kisu property ana jay with DESTRUCTURING
const { people, type } = require('./people');

// console.log(ppl.people, ppl.type, ppl.age);
// Destructuring way
console.log(people, type);   // now outputs value of module.exports