const button = document.querySelectorAll(".button");
const body = document.querySelector("body");
const input = document.querySelector("#color")
input.addEventListener('input', () => {
  body.style.backgroundColor = input.value
})

// console.log(button)

button.forEach((item) => {
  // console.log(item)
  item.addEventListener("click", (e) => {
    // console.log(e.target.id)
    const target = e.target.id
    switch (target) {
      case "grey":
        body.style.backgroundColor = "grey"
        break;
      case "white":
        body.style.backgroundColor = "white"
        break;
      case "blue":
        body.style.backgroundColor = "blue"
        break;
      case "yellow":
        body.style.backgroundColor = "yellow"
        break;
      default:
        body.style.backgroundColor = "red"
        break;
    }
})
})