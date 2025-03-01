const boxContainer = document.querySelector(".boxes");
const button = document.querySelector(".magic");

button.addEventListener("click", () => boxContainer.classList.toggle);

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
