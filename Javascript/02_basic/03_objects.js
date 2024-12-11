// singleton

// object literals

// Object.create
const mySym = Symbol("key1")
const JsUser = {
    name: "Naved",
    "full name": "Naved Ansari",
    age: 18,
    location: "Jaipur",
    email: "htiesh@gooogle.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym] : "HelloKey"
}
// console.log(JsUser[mySym])

// JsUser.email = "naved@google.com"
// Object.freeze(JsUser)
// JsUser.email = "naved@micorsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log(`Hello js User, ${this.name}`)
}

console.log(JsUser.greeting())