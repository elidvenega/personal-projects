// This files purpose is to work on JS loops
const output = document.querySelector(".output");
let colors = ["Blue", "Red", "Yellow", "Green"];
let emptyArrColors = [];

for (let i = 0; i < colors.length; i++) {
  emptyArrColors.push(colors[i]);
}

output.textContent = emptyArrColors