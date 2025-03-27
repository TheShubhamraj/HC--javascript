// this baat karta hai current context ke bare mein 

const user ={
    username :"shubham",
    prince:999,

    welcomeMessage:function(){
        console.log(`${this.username} . welcome to the website`);
    console.log(this);
        
    }
    

}
// user.welcomeMessage()
// // context changing
// user.username = "mommm"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "shubham "
//     console.log(this.username);
    
// }
// chai()
// -- lesson yeh hai kee this only works inside object not inside function 

// const chai =  function(){
//     let username = "shubham "
//     console.log(this.username);
// }

// arrow function 
const chai = () => {
    let username = "shubham "
    console.log(this);
}








chai()


// const addTwo = (num1,num2) => {
//     return num1+num2
// }


// implicit return 
// const addTwo = (num1,num2) => num1+num2

const addTwo = (num1,num2) => ({username:"shubham"})


console.log(addTwo(4,3));


const myArr = [ 2,33,5,5,5,]
