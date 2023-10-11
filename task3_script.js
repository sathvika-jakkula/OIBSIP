
const celsius = document.querySelector("#celsius");
const deg = document.querySelector("#degree");
const Btn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");




Btn.addEventListener("click", (e) => {
 
  convertToCelsius();
 
});

function convertToCelsius() {
  let inputValue = deg.value;
    if (tempType.value === "fahrenheit") {
      const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
      celsius.innerHTML = `${FahrenheitToCelsius.toFixed(2)} C`;
    } else if (tempType.value === "celsius") {
      const KelvinToCelsius = ((9/5)*inputValue)+32;
      celsius.innerHTML = `${KelvinToCelsius.toFixed(2)} F`;
    }
}