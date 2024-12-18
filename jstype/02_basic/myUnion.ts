let score: number | string = 33

score = 44
score = "55"

type User = {
  name: string
  id: number
}

type Admin = {
  username: string
  id: number
}

let hitesh: User | Admin = {name: "Hitesh", id: 234}

hitesh = {username: "hc", id: 334}

function getDbId(id: (number | string | boolean))  {
  if(typeof id === "string"){
    id.toLowerCase()
  }else {
    id + 3
  }
}
getDbId(3)
getDbId("3")


// array

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = ["1", 3, "3", true]





let pi:3.14 = 3.14

// pi = 3.12

let seatAllotment: "aisle" | "middle" | "window"


seatAllotment = "aisle"