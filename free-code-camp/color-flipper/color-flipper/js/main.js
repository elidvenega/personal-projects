const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

const colors = [
  "#475569",
  "#dc2626",
  "rgba(133,122,200)",
  "#f15025",
  "#78350f",
  "#166534",
  "#0e7490",
];

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

function changeColor() {
  // get random number 0 - 3 colors[3]
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
}

btn.addEventListener("click", changeColor);
