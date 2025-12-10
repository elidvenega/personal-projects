"use strict";

const container = document.querySelector(".container");
const button = document.querySelector(".button");

const quotes = [
  "Walk Each Day",
  "Never Give Up",
  "Work Hard and Believe in God",
  "Victory Is Around The Corner",
  "Believe in Yourself",
];

// function getRandomQuote() {
//   const randomQuote = Math.floor(Math.random() * quotes.length);
//   return (container.textContent = quotes[randomQuote]);
// }

function getRandomQuote() {
  const randomQuote = Math.floor(Math.random() * quotes.length);
  const quote = `
 <div class="quote">
 <p>${quotes[randomQuote]}</p>
 </div>
  
  `;

  return container.innerHTML = quote;
}

button.addEventListener("click", getRandomQuote);
