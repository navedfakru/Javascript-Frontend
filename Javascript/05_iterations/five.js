const codding = ['js', 'ruby', 'java', 'python', 'cpp']

// codding.forEach(function (item) {
//     console.log(item)
// })

// codding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item) {
//     console.log(item);
// }

// codding.forEach(printMe)

// codding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})