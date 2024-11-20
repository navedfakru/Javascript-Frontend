/* const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String("hitesh-hc")
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newString = gameName.substring(0, 4)
console.log(newString)

const anotherStirng = gameName.slice(-8, 4)
console.log(anotherStirng) */

const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " value"); // not recomendtion

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`)

const gameName = new String('hitesh-hc-com-naved');
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase())

// console.log(gameName.indexOf('c'));

const newString = gameName.slice(-8, 4)
// console.log(newString)

const newStringOne = "   hitesh     ";
console.log(newStringOne);
console.log(newStringOne.trim())

const url = "https://hitesh.com/htesh%20choudhary"

console.log(url.replace("%20", "-"))
console.log(url.includes('naved'))
console.log(gameName.split("-", 2))

console.log("naved".split(""))