// The Array with colors
const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

// This function is getting the colors from the array at a random index
function getRandomIndex() {
  const randomIndex = Math.floor(darkColorsArr.length * Math.random());
  return randomIndex;
}

// Selecting the body
const body = document.querySelector("body");
// Getting the span with id = #bg-hex-code
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

// The function that gets the color and outputs the results as the text and body background color
function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()];

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}
// selecting the btn element
const btn = document.querySelector("#btn");
btn.addEventListener("click", changeBackgroundColor);

// btn.onclick = changeBackgroundColor;
