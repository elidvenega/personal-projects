import { useState, useEffect } from "react";
import "./style.css";

// JS
// const jokeDisplay = document.querySelector(".joke");
// const jokeId= document.querySelector(".jokeId");
// const button = document.querySelector(".button");

// async function getDadJoke() {
//   try {
//     const getJoke = await fetch(` https://icanhazdadjoke.com`, {
//       headers: {
//         Accept: "application/json",
//       },
//     });
//     const joke = await getJoke.json();
//     jokeDisplay.innerHTML = joke.joke;
//     console.log(joke);
//   } catch (e) {
//     console.error("Error fetching dad joke:", e);
//   }
// }

// button.addEventListener("click", getDadJoke);

export default function DadJokesAPI() {
  return (
    <div>
      <h1>Dad Jokes</h1>
      <p>Welcome to the dad jokes section! Enjoy some laughs!</p>
      <div className="dadjoke-container">
        <p className="joke">
          Why did the scarecrow win an award? Because he was outstanding in his
          field!
        </p>
        <button className="button">Random Joke</button>
      </div>
    </div>
  );
}
