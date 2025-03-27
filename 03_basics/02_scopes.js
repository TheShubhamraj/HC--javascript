const a = 300


if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log(a);
    
}
console.log(a);


function one()  {
    const username = "shubha"
    function two(){
        console.log(username);

    }
    two()
    
}
one()


if (true) {
    const username = "shuubh"
    if(username === "shuubh"){
        console.log("okay tested");
        
    }
}

//+++++++++++++++++interesting+++++++++++++

console.log(addone(5)
);

function addone(num){
    return num+1;
}

// hoisting 

// addTwo(6)-- this will throw an error 
const addTwo = function(num){
    return num+2;
}

