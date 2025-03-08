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
// type of function is object function