// singleton- constructor se banega to singelton banega
// object are defined in two ways as litereals and constructor
// object.create - constructor method


// object literals

const mySym = Symbol("key1")

const JsUser ={
    name:"shubham",
    "full name":"shubham raj",
    [mySym] : "mykey1",
    age: 18,
    location:"kolkata",
    email : "rajshubham9934",
    isLoggeedIn:false,
    lastLoginDay:['Monday',"saturday"]


} 

//
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser.mySym);

JsUser.email = "shubham@chatgpt.com"
// Object.freeze(JsUser)// freezing 
JsUser.email = "google.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
    
}
JsUser.greeting2 = function(){
    console.log(`hello js user,${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());


