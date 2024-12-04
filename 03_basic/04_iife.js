// // Immediately Invoked Function Expressions (IIFE)

// // (function chai(){
// //     // named IIFE
// //     console.log(`DB CONNECTED`);
// // })();

// // ((name) => {
// //     console.log(`DB CONNECTED TWO ${name}`);
// // })('hitesh');


// let val1 = 10;
// let val2 = 5;

// function add(num1, num2){
//     let total = num1 + num2
//     return total
// }

// // let result = add(val1, val2)
// // console.log(result)

// // function fun() {
// //     fun()
// // }

// // fun()

// function one(){
//     console.log("One")
//     two()
// }
// function two(){
//     console.log("Two")
//     three()
// }
// function three(){
//     console.log("Three")
// }

// // one()
// // two()
// // three()

// iife

// (function chai() {
//     // named iife
//     console.log(`DB Connected`)
// })();
// ((name) => {
//     console.log(`DB Connected two ${name}`)
// })('hitesh');

let val1 = 10;
let val2 = 5;

function addTwo(num1, num2) {
    let total = num1 + num2;
    return total;
}

const result1 = addTwo(val1, val2);
const result2 = addTwo(3, 4);

/* 
this { } golbal scope
memory phase;
val1 undeifned
val2 undefiend;
addtwo definiaton
resut1 undefined
result2 undefined
deffinta addtwo  never + thread
memer 
 extucation phase total golboalscope

 console.log() = total
*/