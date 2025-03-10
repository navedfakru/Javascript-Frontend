const clock = document.getElementById("clock");

function ampm(){
  let time = new Date();
  let hours = time.getHours();
  let ampm = hours >= 12 ? "PM" : "AM"
  let min = time.getMinutes();
  let second = time.getSeconds().toString().padStart(2, '0')
  hours = hours % 12 || 12
  // console.log(hours, ampm)
  clock.innerHTML = `${hours}:${min}:${second} ${ampm}`
}


setInterval(function(){
  let time = new Date();
  // console.log(time.toLocaleTimeString())
  // clock.innerHTML = time.toLocaleTimeString()
  ampm()
}, 1000)