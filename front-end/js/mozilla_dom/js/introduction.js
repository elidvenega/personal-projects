const story = document.body.querySelector(".story");

const setText = document.body.querySelector("#set-text");
setText.addEventListener("click", () => {
  story.textContent = "It was a dark and stormy night...";
});

const clearText = document.body.querySelector("#clear-text");

// text
const output = document.querySelector(".output");

clearText.addEventListener("click", () => {
  story.textContent = "";
});
