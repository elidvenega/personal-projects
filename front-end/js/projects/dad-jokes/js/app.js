"use strict";

// The variable names will be jokeDisplay button

const jokeDisplay = document.querySelector(".joke");
const button = document.querySelector(".button");

async function getDadJoke() {
  try {
    const dadJoke = await fetch(`https://icanhazdadjoke.com/`, {
      headers: {
        Accept: "application/json",
      },
    });

    const data = await dadJoke.json();
    
    jokeDisplay.textContent = data.joke;
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", getDadJoke);
