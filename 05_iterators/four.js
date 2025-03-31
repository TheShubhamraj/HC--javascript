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