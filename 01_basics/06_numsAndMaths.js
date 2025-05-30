const score = 400 
 
// number declaration
const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length);

console.log(balance.toFixed(2))

// precision
const other = 123.8966

console.log(other.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));



// ++++++++++ Charcha on Maths ++++++++++

console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.688888));
console.log(Math.ceil(4.688888));
console.log(Math.floor(Math.floor(4.688888)));

// random
console.log(Math.floor(Math.random()*10) +1);

const min = 10
const max = 20

console.log(Math.random() * (max - min +1)+min)


