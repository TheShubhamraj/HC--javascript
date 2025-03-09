const name = "shubham"
const repoCount ="50"
console.log(name + repoCount +"value")// outdated tarikaa


// string interpolation bhi kahte hai isse
console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

 // string declaration 
const gameName = new String("shubhamraj")
console.log(gameName[0])
console.log(gameName.__proto__)// inheritance

console.log(gameName.toUpperCase())
console.log(gameName.charAt('4'))

console.log(gameName.indexOf('u'))




// substring
const newString = gameName.substring(0,4)
console.log(newString)



// slice
const anotherString = gameName.slice(-8,4)
console.log(anotherString)


// trim
const newStringOne= "  hitesh  "
console.log(newStringOne)
console.log(newStringOne.trim())


// replace
const url ="https:// shubham.com/shubham%20raj"
console.log(url.replace('%20',"--"))

console.log(url.includes("shuba"))

// split
console.log(url.split("/"))
