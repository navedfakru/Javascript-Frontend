/* // array

const myArr = [0, 1, 2, 3, 4, 5]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr2[1])

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)

// slice splice

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr)

const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2)

 */

const myArr = [0, 1, 2, 3, 4, true]

// console.log(myArr)
// const newarr = myArr.join('[@]')
// console.log( newarr)

const myarr1 = [0, 1, 2, 3, 4, 5]
console.log("A", myarr1)
const myarr2 = myarr1.slice(1, 3)
console.log(myarr2)
console.log("B", myarr1)
console.log(myarr1.splice(1, 3))
console.log("C", myarr1)