"use strict";

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

// Colors ["#64748b", "#dc2626", "#f97316", "#b45309"];

function colorChanger() {
  const textColor = document.querySelector(".color");
  const button = document.querySelector(".btn");

  const colors = [
    "#64748b",
    "#dc2626",
    "#f97316",
    "#b45309",
    "#7e22ce",
    "#86198f",
  ];

  const chanceColor = () => Math.floor(Math.random() * colors.length);

  const getColor = () => {
    const randomColor = chanceColor();
    document.body.style.backgroundColor = colors[randomColor];
    textColor.style.color = colors[randomColor];
    textColor.innerText = colors[randomColor];
  };
  button.addEventListener("click", getColor);
}

colorChanger();
