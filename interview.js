function sum(a, b){
  return a + b;
}

console.log(sum(10,"10")) 

function getSumarry(one, two, three){
  console.log(one)
  console.log(two)
  console.log(three)
}

const fName = "Naved"
const age = 909

getSumarry`${fName} age is ${age}`

function checkAge(data){
  if(data === {age: 18}){
    console.log("You are an adult!");
  } else if(data == {age: 18}){
    console.log("You are still an adult.")
  } else  {
    console.log("Hmm .. NO age");
  }
}

checkAge({age: 18})
// because that obj and array have difrent location memory differnt meory
console.log({name: "Naved"} === {name: "Naved"})
console.log([1, 2, 3] === [1, 2, 3])

function getTypes(...args){
  console.log(instanceof args)
}

getTypes(108)

console.log(typeof [2, 3, 4]);

function digitsum(num){
  let sum = 0;
  while(num > 0){
    sum = sum + num%10;
    num = Math.floor(num / 10);
  }
  return sum;
}


console.log(digitsum(2124))

// qs 20
var num  = 8;
var num = 10;

console.log(num);

// qs 21

const obj = {1: "a", 2: "b", 3: "c"}
const set = new Set([1, 2, 3, 4, 5])
console.log(obj)
console.log(set)

console.log(obj.hasOwnProperty("1"));
console.log(obj.hasOwnProperty(1));

console.log(set.has("1"));
console.log(set.has(1));

// set.forEach((el) => console.log(el))
console.log(set.values().next())

/* qs 22 object in last value is store as a key not over write basik key*/

const obj = {a: "1", b: "2", a: "3"}

console.log(obj)

/*
 qs 23 in this question javascript continue when hit 3 code wil be skip and next itration
*/

for (let i = 1; i < 5; i++) {
  if(i === 3) continue;
  console.log(i);
}

/*
qs 24 in this question based on prototype it string protyt method name is you are amzing ret 
this method all string in this code base
*/

String.prototype.youAreAmazing = () => {
  return "You're amazing my friend.";
}

const who = "viewer";

console.log(who.youAreAmazing())

/* 
  qs 25 this qs based on object in this obje b = 222, c 999 its overwrite allways given this c == 999 value when call b
*/
const a = {};
const b = {key: "b"};
const c = {key: "c"};

a[b] = 222;
a[c] = 999;

console.log(a[b]);

/* 
  qs 26 this question call and bind when call fun is return immedatly bind is reaturn functon let return function
*/

const lang = {name: "ReactJS"};

function getLib(ver){
  return `${this.name} version ${ver}`
}

console.log(getLib.call(lang, 18))
// console.log(getLib.bind(lang, 18))
getLib.bind(lang, 18)

/* 
  qs 27 in this qs when conssole typeo syahi call it's type of given type of number and not function beacuse here is a iife
*/

function sayHi(){
  return (() => 9)();
}

console.log(typeof sayHi())

/* 
qs 28 in thsi qs js left write excute when i call that is get me string not of number
*/
console.log(typeof typeof [])
typeof "number"
String

/* 
  qs 29  in thsi qs here will be excute of length 11 and 7 empty slot bcz javascript is friendly languge
*/

const numbers = [1, 2, 3]
numbers[10] = 11
console.log(numbers)

/* 
  qs 30 in this question will be give me 1, undefined, 2
*/

(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
  })();

  