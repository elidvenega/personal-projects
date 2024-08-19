// Selects classes
// const color = document.querySelector(".color");
// const btn = document.querySelector(".btn");

// // Colors array
// const colors = ["#64748b", "#dc2626", "#f97316", "#b45309"];

// // Function to get random numbers
// const getRandomNumber = () => {
//     return Math.floor(Math.random() * colors.length);
//   }

//   const changeColor = () => {
//     // get random number 0 - 3 colors[3]
//     const randomNumber = getRandomNumber();
//     document.body.style.backgroundColor = colors[randomNumber];
//     color.style.color = colors[randomNumber];
//     color.textContent = colors[randomNumber];
//   }

//   btn.addEventListener("click", changeColor);

const color = document.querySelector(".color");
const button = document.querySelector(".btn");

const colors =  ["#64748b", "#dc2626", "#f97316", "#b45309"];


const randomColor = () => {
  return Math.floor(Math.random() * colors.length);
};

const getColor = () => {
  const newColor = randomColor();
  document.body.style.backgroundColor = colors[newColor];
  color.style.color = colors[newColor];
  color.textContent = colors[newColor];
};

button.addEventListener("click", getColor);
