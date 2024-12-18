// const user: (string | number)[] = [1, "hc"]

let tUser: [string, number, boolean]

tUser = ["hc", 1223, true]

let rgb: [number, number, number] = [255, 123, 112]

type user = [number, string]

const newUser: user = [112, "example@google.com"]

newUser[1] = "hc.com"
newUser.push(true)