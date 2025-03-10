const form = document.querySelector("form")

form.addEventListener("submit", function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const results = document.querySelector("#results")
  // console.log(height)
  if(height === "" || height < 0 || isNaN(height)){
    results.innerHTML = `Please give me valid height ${height}`
  } else if(weight === "" || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give me valid weight ${weight}`
  } else {
    bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // console.log(bmi)
    if(bmi  < 18.6){
      results.innerHTML = `<span>${bmi}</span><br><sapn style="color: yellow;">You are weight is a Under Weight</span>`
    } else if( bmi > 18.6 && bmi < 25.9){
      results.innerHTML = `<span>${bmi}</span><br><sapn style="color: green;">You are weight is a Normal weight</span>`
    } else {
      results.innerHTML = `<span>${bmi}</span><br><sapn style="color: red;">You are weight is a Overweight</span>`
    }
  }
});