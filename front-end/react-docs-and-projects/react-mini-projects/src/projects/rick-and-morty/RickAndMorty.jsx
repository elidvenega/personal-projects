import { useState, useEffect } from "react";
import "./style.css";

export default function RickAndMorty() {
  const [character, setCharacter] = useState(null);
  const randomId = Math.floor(Math.random() * 826 + 1);

  //     async function getCharacter() {
  //   loadButton.disabled = true;
  //   loadButton.textContent = "...Loading"
  //   try {
  //     const randomId = Math.floor(Math.random() * 826 + 1);
  //     const resp = await fetch(
  //       `https://rickandmortyapi.com/api/character/${randomId}`,
  //     );

  //     const data = await resp.json();
  //     characterImage.src = data.image;
  //     charName.textContent = data.name;
  //     charSpecies.textContent = data.species;
  //     charStatus.textContent = data.status;
  //   } catch (err) {
  //     console.error(err);
  //     charName.textContent = "Error loading character";
  //   }  finally {
  //     loadButton.disabled = false;
  //     loadButton.textContent = "Get Another"
  //   }
  // }

  async function getData() {
    try {
      const resp = await fetch(
        `https://rickandmortyapi.com/api/character/${randomId}`,
      );
      const data = await resp.json();
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {}, []);
  return (
    <div className="card-container">
      <h1>Random Character</h1>
      <img className="card-img" src="" alt="rick-and-morty" />
      <div className="card-info">
        <p>
          <strong>Name:</strong> <span className="char-name"></span>
        </p>
        <p>
          <strong>Species</strong>: <span className="char-species"></span>
        </p>
        <p>
          <strong>Status:</strong> <span className="status"></span>
        </p>
      </div>
      <button className="card-button">Get Another</button>
    </div>
  );
}
