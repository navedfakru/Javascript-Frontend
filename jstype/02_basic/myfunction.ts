function addTwo(num: number): number{
  return num + 2
  // return "hello"
}

function getUpper(val: string){
  return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean) => {}

addTwo(5)
getUpper("naved")
signUpUser("naved", "naved@google.com", false)
loginUser("h", "h@h.com", true)


// function getValue(myVal: number){
//   if (myVal > 5) {
//     return true
//   }
//   return "200 OK"
// }

const getHello = (s: string): string => {
  return ""
}

// const heros = ["thor", "spiderman", "ironman"]
const heros = [1, 2, 3]

heros.map((hero): string => {
  return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
  console.log(errmsg);
}

function handleError(errmsg: string): never{
  throw new Error(errmsg);
}


export {}