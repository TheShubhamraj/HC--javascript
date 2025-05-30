
// promise is a *object *representing the eventual completion or failure of an asynchronous operation .
const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls , cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
        
    },1000)
});

/// consumption
promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log(("Async task 2"));
        resolve()
        
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username:"hitesh",password:"12345"})
        }else{
            reject('error something went wrong')
        }
    },1000)
})
// how to avoid callback hell
promiseFour.then((user) => {
    console.log(user);
    return user.username    

}).then((username)=>{// chaining
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=>{
    console.log('the promise is either resolved or rejected');
    
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"javascript",password:"12345"})
        }else{
            reject('error something went wrong')
        }
    },1000)
})
// then - is runned when promise is successfully completed
// catch - is used to find then error when promise is reject
// finally runs no matter what happens


// now handling promise using async and await instead of then and catch

async function consumePromise(){
    try {
        const response =   await promiseFive
   console.log(response);
   
    } catch (error) {
        console.log(error);
        
    }
   } 
   consumePromise()


//    async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data =await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E:",error);
        
//     }
    
//    }
//    getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) =>{
    console.log(data);
    
})
.catch((error) => console.log(error)

)