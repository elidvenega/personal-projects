"use strict";

const jokeDisplay = document.querySelector(".joke");
const button = document.querySelector(".button");

async function getDadJoke() {
  try {
    const getJoke = await fetch(` https://icanhazdadjoke.com`, {
      headers: {
        Accept: "application/json",
      },
    });
    const joke = await getJoke.json();
    jokeDisplay.innerHTML = joke.joke;
    console.log(joke);
  } catch (e) {
    console.error("Error fetching dad joke:", e);
  }
}

button.addEventListener("click", getDadJoke);
