/* const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }

}


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()


// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }


const chai = () => {
    let username = "hitesh"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3, 4));

 */

const User = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// User.welcomeMessage()
// User.username = "Naved"
// User.welcomeMessage()

// here is a node envirement this is give me {}
// console.log(this)


// function chai(){
//     let username = "hitesh"
//     console.log(this)
// }
// chai()



// const chai = function (){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "hitesh"
    console.log(this);
}
// chai()

const addTwo = (num1, num2) => {
    return num1 + num2
}

// console.log(addTwo(2,3))

const myArr = [1, 2, 3, 4, 5]

// myArr.forEach((item, index) => (console.log(item * (index + 1))))

