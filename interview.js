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

console.log(typeof [2, 3, 4])