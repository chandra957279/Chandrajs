// Primitive 
// 7 types
// ===> String,Number,Boolean, null, undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.9

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId= Symbol('123')

console.log(id === anotherId);



// Reference (Non Primitive)


// Array , Object , function


const heros = ["shaktiman", "naagraj", "daga"]
let Myobj ={
    name: "Tuntun",
    age: 22,
}
const myfun = function(){
    console.log("Hello World!");
    
}
