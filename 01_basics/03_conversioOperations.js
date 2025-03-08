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

// ******************** operations**************

let value = 3
let negative = -value
// console.log(negative)

// console.log(2+2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

// let str1 = "hello"
// let str2 = " shubham"
// let str3 = str1+str2
// console.log(str3)

// console.log("1" +2);
// console.log(1+"2")
// console.log("1"+2 +2)
// console.log(1 +2+"2")

// console.log(3 +4 *5%3)
// please watch english channel video

console.log(+true);// conversion
console.log(+"")// op = 0

let num1,num2,num3
num1 = num2 =num3 = 2+2
let gameCounter = 100
++gameCounter;
console.log(gameCounter)