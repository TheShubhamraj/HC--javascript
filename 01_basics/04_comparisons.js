// console.log(2>1)
// console.log(2 >=1)
// console.log(2==1)

// console.log("2">1)
// console.log("00000000" >1)

console.log(null > 0)// false
console.log(null == 0)// false
console.log(null >= 0)// true : reason is that comparison operator convert null to 0 then checks it as 
console.log(undefined > 0)// false
console.log(undefined == 0)// false
console.log(undefined >= 0)// false

// triple === 
// does not convert and checks were as == converts and then check is it equal or not

console.log("2"===2)// false