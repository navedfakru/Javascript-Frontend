const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

const user2 = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

function User(username, loginCount, isLoggedIn){
   this.username = username;
   this.loginCount = loginCount;
   this.isLoggedIn = isLoggedIn;
   this.greeting = function(){
    console.log(`Welocme ${this.username}`)
   }
//    return this
}

const userOne = new User("hites", 12, true);
const userTow = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
// console.log(userTow)