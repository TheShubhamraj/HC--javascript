// JavaScript is dynamically typed, meaning:

// Variable types are determined at runtime, not during compilation.

// Primitive data types

//  7 types : String ,Number, Boolean,null,undefined,Symbol,BigInt

const score = 100
const scorevalue = 100.3

const isloggedin = false
const outsidetemp = null
let userEmail

const id = Symbol('123')
const anotherid = Symbol("123")
console.log(id == anotherid)

const bignumber = 233423423423423423432443n


// Reference (Non primitive):

// Array , Objects,Functions

// array
const heros =["shaktiman","naagraj","doga"]
// object
let myObj ={
    name :"shubham ",
    age : 21


}


const myfunction = function(){
    console.log("hello chai aur codeers")
}
// typeof function is object function


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// types of memory used for storing data


// 1.Stack (Primitive),2.Heap (Non - Primitive)

// when ever something is stored in stack then we will get a copy and when ever we store something in heap then we will get a reference

// example of stack memory
let myyt = "rajshubham "
let anotheryt =myyt
anotheryt = "chai aur code"
console.log(myyt)
console.log(anotheryt)


// example of heap memory 

let myObject1 ={
    name:"shubham",
    email:"rajshubham9934"
}
let myObj2 = myObject1;
myObj2.email ="retashk008"
console.log(myObject1)
console.log(myObj2)