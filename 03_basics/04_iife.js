//Immediatelly Invoked Function Expression--
 // global scope ke pollution se problem hoti  toh bachne ke liye use hota hai iife
(function chai(){
    // named iife
    console.log(`DB connected`);
    
}) ();
// chai();
( (name) => {
    console.log(` ${name}`);
    
})("hitesh");

//
