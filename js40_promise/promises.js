const promiseOne = new Promise(function(resolve, reject){
  // do an async task
  // db calls cryptography, network
  setTimeout(() => {
    console.log("Async task is complete")
    resolve()
  }, 1000);
})


promiseOne.then(function(){
  console.log("Promise consumed")
})

new Promise(function(resolve, reject){
  setTimeout(() => {
    console.log("Async task 2")
    resolve()
  }, 1000);
}).then(function(){
  console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({username: "chai", email: "naved@example.com"})
  }, 1000)
})

promiseThree.then(function(user){
  console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = false;
    if(!error){
      resolve({username: "naved", password: "123"})
    } else {
      reject('ERROR: something went wrong')
    }
  }, 2000);
  })

promiseFour.then((user) => {
  console.log(user)
  return user.username
}).then((username) => {
  console.log(username)
}).catch(function(err){
  console.log(err);
})