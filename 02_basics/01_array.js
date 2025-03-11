// array

const myArr = [1,2,23,44]
console.log(myArr);

const myHeros = ["shaktiwoman", "wonder girl", ]
console.log(myHeros);


// accessing
console.log(myArr[0]);
// shallow copy mean share the same references
// array follow the shallow copy
// opposite of shallow copy is deep copy


// Array method

// push and pop option follow lifo properties
myArr.push(6)
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(9)// adds value at first and as it have to shift all value so more cpu consumption
myArr.shift()// remove value from first
console.log(myArr);

console.log(myArr.includes(44));
console.log(myArr.indexOf(44));

// convert type to string
const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);

// slice,spice

console.log("A ",myArr);
const myn1 = myArr.slice(1,4);
// console.log(myArr);
console.log(myn1);

console.log("B",myArr)

const myN2 = myArr.splice(1,3)
console.log(myN2);

console.log("C" ,myArr);

// difference between slice and splice is that
// slice - it doesn't includes the last index and also no change in original array occurs
// whereas in splice it includes the last index and also changes in original array also occurs it changes by reference 





