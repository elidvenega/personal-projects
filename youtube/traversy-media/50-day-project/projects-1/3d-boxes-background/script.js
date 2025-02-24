// box container #boxes and .boxes .big
const boxesContainer = document.getElementById("boxes");
// getting button it has #btn and .magic
const btn = document.getElementById("btn");

// look up toggle
btn.addEventListener("click", () => boxesContainer.classList.toggle("big"));

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      // works on the boxes dimensions
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      // this appends to the container
      boxesContainer.appendChild(box);
    }
  }
}

createBoxes();
