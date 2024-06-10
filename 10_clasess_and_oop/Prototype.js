// let myName = "hitesh      "
// let mychannel = "chai       "

// console.log(myName.trueLength);


let myHeros = ["thor", "naved"]

let heroPower = {
    thor: "hammer",
    spiderman: "king sord",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`)
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`)
}

// heroPower.hitesh()
// myName.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chaia@google.com"
}

    const Teacher = {
    makeVideo: true
    }

    const TeachingSupport = {
    isAvailable: false
    }

    const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
    }

    Teacher.__proto__ = User

    // console.log(TASupport)

let anotherUsername = "ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`)
    // return this.trim().length
}

// console.log(anotherUsername.length)
// anotherUsername.trueLength()
// "hitesh".trueLength()
// "iceTea".trueLength()


