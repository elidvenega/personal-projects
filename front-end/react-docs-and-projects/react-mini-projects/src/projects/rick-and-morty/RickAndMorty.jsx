import { useState, useEffect } from "react";
import "./style.css";

export default function RickAndMorty() {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getData() {
    setLoading(true);
    setError(null);
    try {
      const randomId = Math.floor(Math.random() * 826) + 1;
      const resp = await fetch(
        `https://rickandmortyapi.com/api/character/${randomId}`,
      );

      if (!resp.ok) throw new Error("Failed to fetch");
      const data = await resp.json();
      setCharacter(data);
      console.log(data);
    } catch (error) {
      setError("Something went wrong");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="card-container">
      <h1>Random Character</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {character && (
        <>
          <img
            className="card-img"
            src={character.image}
            alt={character.name}
          />
          <div className="card-info">
            <p>
              <strong>Name:</strong>{" "}
              <span className="char-name">{character.name}</span>
            </p>
            <p>
              <strong>Species:</strong>{" "}
              <span className="char-species">{character.species}</span>
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span className="status">{character.status}</span>
            </p>
          </div>
        </>
      )}

      <button disabled={loading} className="card-button" onClick={getData}>
       {loading ? "Loading..." : " Get Another"}
      </button>
    </div>
  );
}
