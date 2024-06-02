// singleton

// object literals

// Object.create
const mySym = Symbol("key1")
const JsUser = {
    name: "Naved",
    "full name": "Naved Ansari",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "htiesh@gooogle.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log(`Hello JsUser`)
}

JsUser.greetingTo = function(){
    console.log(`Hello JsUser ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTo());