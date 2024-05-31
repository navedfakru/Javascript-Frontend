// Perimitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
const score =  100
const scoreValue = 100.3

const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id)
// console.log(anotherId)
// console.log(id === anotherId)

const bigNumber = 323553235433342n

// Reference (Non primitive)

// Array, Object, Function

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "hitesh",
    age: 22
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof heros)