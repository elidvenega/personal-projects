const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const hexColor = document.querySelector(".hex-code");

const randomColors = [
  "#0284c7",
  "#047857",
  "#71717a",
  "#f97316",
  "#a21caf",
  "#6d28d9",
];

function randomColor() {
    const random = Math.floor(Math.random() * randomColors.length)
    console.log(random)
}

btn.onclick = randomColor;