/* // Dates

let myDate = new Date()

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreateDate = new Date(2023, 0, 23)
// let myCreateDate = new Date(2023, 0, 23, 5, 3)
// let myCreateDate = new Date("2023-01-14")
let myCreateDate = new Date("01-14-2023")
// console.log(myCreateDate.toLocaleString())


let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.toLocaleString('en-US', {
    weekday: "long",
    timeZone: "America/New_York"
})

console.log(newDate) */

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

let myCreateDate = new Date(2023, 0, 23)
// console.log(myCreateDate.toDateString())

console.log(myDate.toLocaleString('default', {
    weekday: 'short'
}))

console.log(myDate.toLocaleTimeString('ar', {
    weekday: 'long'
}))