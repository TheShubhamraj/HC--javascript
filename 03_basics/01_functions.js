function sayMyname(){
    console.log("shubham");
    console.log("raj");  
}
// sayMyname()

// function addTwoNumbers(number1,number2){// parameters
//     console.log(number1+number2);
    
// }
function addTwoNumbers(number1,number2){// parameters
   let result = number1+number2;
   return result
    
}
const result = addTwoNumbers(2,"a")// arguments
console.log(result);

function userLoggedIn(username ="sam"){
    if(!username){
        console.log("please enter a username");
        return        
    }
    return `${username}  is just logged in`
}

// console.log(userLoggedIn());

function calculateCarPrice(...num1){// rest and spread operator now it is rest 

    return num1
}
console.log(calculateCarPrice(5000,3434,343,5,56));

const user ={
    username : "shubham",
    prince:121212
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.user} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    user:"aditi",
    price:32223
})

const myarr = [200,434,232]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myarr));
