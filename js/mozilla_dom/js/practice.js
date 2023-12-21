// using query selector to get the class div
const output = document.querySelector(".output");

// function to create and add text
function addText() {
  const text = document.createElement("p");
  const outputText = document.createTextNode("Hello this works and is JS");
  return text.appendChild(outputText);
}

output.appendChild(addText());
