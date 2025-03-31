const myObj = {
    js:'javascript',
    cpp:'c++',
    rb:"ruby"

} 
for (const key in myObj) {
    console.log(`${key} shortcut for ${myObj[key]}`);
    
}

// therefore for in loop is used for iteration of object

const programming =["js","cpp", 'jsp']
for (const key in programming) {
    console.log(key ,"value of at index is =",programming[key]);
    
}
// programming.forEach( (item) => {
//     console.log(item);
    
// })

// function printme(item){
//     console.log(item);
    
// }
// programming.forEach(printme)// give only reference of function donot call a function

programming.forEach((item,index,arr) => {
    console.log(item,index,arr);
    
})

const mycoding = [
    {
        lang:"javascript",
        langfilename:"js"
    },
    {
        lang:"java",
        langfilename:"java"
    },
    {
        lang:"python",
        langfilename:"py"
    }
]
mycoding.forEach((item) =>{
    console.log(item.lang);
    
})