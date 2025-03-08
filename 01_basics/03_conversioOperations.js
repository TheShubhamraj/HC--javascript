let score = "33abc"

console.log(typeof score);
console.log(typeof (score))

let valueIntNumber = Number(score)
console.log(typeof valueIntNumber)
console.log(valueIntNumber)// output will be NaN if value is "33abc" // output is 0 in case of null // output NaN if undefined
let isloggedin = 1;
let booleanIsloggedin = Boolean(isloggedin)

// 1=> true; 0=> false
// "" => false
// "string " = true
let somenumber = 33
let stringNumber = String(somenumber)
console.log(stringNumber)
console.log(typeof stringNumber)