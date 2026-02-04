import { useState, useEffect } from "react";
import "./style.css";
import { data } from "framer-motion/client";

export default function RickAndMorty() {
  const [character, setCharacter] = useState(null);

  async function getData() {
    try {
      const randomId = Math.floor(Math.random() * 826 + 1);
      const resp = await fetch(
        `https://rickandmortyapi.com/api/character/${randomId}`,
      );
      const data = await resp.json();
      setCharacter(data);
      console.log(data);
      
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    getData()
  }, []);
  return (
    <div className="card-container">
      <h1>Random Character</h1>
      {character ? (
        <>
          <img className="card-img" src={character.image} alt={character.name} />
          <div className="card-info">
            <p>
              <strong>Name:</strong> <span className="char-name">{character.name}</span>
            </p>
            <p>
              <strong>Species:</strong> <span className="char-species">{character.species}</span>
            </p>
            <p>
              <strong>Status:</strong> <span className="status">{character.status}</span>
            </p> 
          </div> 
          <button className="card-button" onClick={getData}>Get Another</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
