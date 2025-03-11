// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);


let myCreatedated = new Date(2003,3,7)
console.log(myCreatedated.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedated.getTime());
// in second
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getMonth());// 0 se start ho raha hhai
console.log(newDate.getDate());// 1 se start ho raha

newDate.toLocaleString('default',{
    weekday:"long",
})


