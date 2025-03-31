// for of loop
// [{},{}]
const arr=[12,23,3,23,2]
for (const num of arr) {
    console.log(num);
    
}
const greetings = "hello world"
for (const i of greetings) {
    console.log(`each char is ${i}`);
    
}

// Maps

const map = new Map();
map.set('in','india')
map.set('usa',"united states of america")

for (const [key,value] of map) {
    console.log (key+"=="+value);
    
}

// const myObj = {
//     game1 :"spiderman",
//     game2 : "NFS"
// }

// for (const [key,value] of myObj) {
//     console.log (key+"=="+value);

    
// }-- object are not iterable through for of loop
