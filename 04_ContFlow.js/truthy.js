const userEmail = "dsfadsf"

if (userEmail) {
    console.log("got user email");
    
}else{
    console.log("dont have user email");
    
}
// falsey Value
// 1.false,0,-0,BigInt 0n, "",null,undefined,NaN

// truthy value
// 1. "0","false"," ",[],{},function(){}

if (userEmail.length ===0) {
    console.log("array is empty");
    
}
const emptyObj = {}

if (Object.keys(emptyObj).length ===0) {
    console.log("object is empyt");
    
}
// Nullish coalescing operator(??):null, undefined
let val1;
// val1 = 5?? 10
// val1 = null ?? 10
// val1 = undefined ?? 12 ?? 12121

console.log(val1);

// Terniary Operator

// condition ? true : false

const ice = 11
ice <= 90 ? console.log("less than 90") : console.log("greater than 90");
;





