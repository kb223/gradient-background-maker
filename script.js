var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//1. Write code so that the colour inputs match the background generated on the first page load.
// - added same color code in HTML as CSS

//2. Display the initial CSS linear gradient property on page load.
setGradient();

//3. BONUS: Add a random button which generates two random numbers for the colour inputs.

//set RandomColor1 and assign to color1 input
function getRandomColor1() {
  var letters = "0123456789ABCDEF";
  var r1color = "#";
  for (var i = 0; i < 6; i++) {
    r1color += letters[Math.floor(Math.random() * 16)];
  }
  color1.setAttribute("value", r1color);

  return r1color;
}
//set RandomColor2 and assign to color2 input
function getRandomColor2() {
  var letters = "0123456789ABCDEF";
  var r2color = "#";
  for (var i = 0; i < 6; i++) {
    r2color += letters[Math.floor(Math.random() * 16)];
  }
  color2.setAttribute("value", r2color);

  return r2color;
}

//onclick button function calling random color function to make gradient
function setRandomColor() {
  body.style.background =
    "linear-gradient(to right, " +
    getRandomColor1() +
    ", " +
    getRandomColor2() +
    ")";
  css.textContent = body.style.background + ";";
}
