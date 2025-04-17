// generate a random color
const randomcolor = function(){
    const hex = '0123456789ABCDEF'
    let color ="#"
    for(let i =1;i<7;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}
let intervalId
console.log(randomcolor());
const startchangingcolor =function(){
    if (!intervalId) {// !intervalId means null 
        intervalId=setInterval(changeBgcolor,1000) 
    }
    

    function changeBgcolor(){
        document.body.style.backgroundColor=randomcolor()
    }
}
const stopchangingcolor =function(){
    clearInterval(intervalId)
    intervalId = null // edge cases in project
}

document.querySelector('#start').addEventListener('click',startchangingcolor)
document.querySelector('#stop').addEventListener('click',stopchangingcolor)
