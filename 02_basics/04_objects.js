// objects using constructor

const tinderUser = new Object()
tinderUser.id ="1234abc"
tinderUser.name ="aditi"
tinderUser.isloggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "aditi@gmail.com",
    fullname :{
        userfullname:{
            firstname :"aditi",
            lastname:"singh",


        }
    }
}
// console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}

// console.log(obj3);

const user = [
    {
        id:1,
        email:"hiteshhhhh"
    },
    {
        id:1,
        email:"hiteshhhhh"
    }
]

user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty("isloggedIn"));

// object destructing

const course ={
    coursename:"js in hindi",
    price:"69",
    courseInstructor:"hitesh"
}

const {courseInstructor:inst} =  course

console.log(inst);
// react part

const navbar = ({company}) => {

}
navbar (company = "hitesh")

// api - apna kaam dusre ke saar par
// json
// {
//     "name":'shubham',
//     "coursename" :"js in hindi",
//     "price":"free"
// }
[
    {},
    {}

]
