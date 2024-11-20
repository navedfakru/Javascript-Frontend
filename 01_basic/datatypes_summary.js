/* // Perimitive
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

// console.log(typeof heros)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubeName = "hiteshchoudharydotcom"

let anothername = myYoutubeName
anothername = "chaiaurcode"

// console.log(myYoutubeName);
// console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "naved@10055@gmail.com"

// console.log(userOne.email)
// console.log(userTwo.email)

 */

// Stack (primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(anothername)
console.log(myYoutubename)


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);
