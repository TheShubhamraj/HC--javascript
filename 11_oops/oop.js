// object literals
const user ={
    username:"shubh",
    loginCount:9,
    signedIn:true ,
    getUserDetails:function(){
        console.log("got user details from database");
        console.log(`Username:${this.username}`);
        

        
    }
}

// console.log(user.username);
user.getUserDetails()



// constructor function -- new
// const promiseOne = new Promise()
// const date = new Date()

function user1(username, logincount, isLoggeedIn){
    this.username = username;
    this.loginCount = logincount;
    this.isLoggeedIn = isLoggeedIn;

    return this
}

const userone = new user1("shubh",8,true)

const usertwo =new user1("ssss",9,false)
console.log(userone);

// happens what when we use new keyword
// creates a empty object which is called as instance
//calls a constructor function due to new keyword
// all the arguments get packed 
// last get 
