import { useState, useEffect } from "react";
import "./style.css";

export default function DadJokesThree() {
  const [dadJoke, setDadJOke] = useState("This is the dad Joke.");
  const [loading, setLoading] = useState(false);
  const [error, serError] = useState(null);

  async function dadJokeAPI() {
    setLoading(true);
    serError(null);
    try {
      const resp = await fetch(` https://icanhazdadjoke.com/`, {
        headers: {
          Accept: "application/json",
        },
      });
      const data = await resp.json();
      setDadJOke(data);
      console.log(data);
    } catch (err) {
      setError("Failed to fetch. Try again");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    dadJokeAPI();
  }, []);
  return (
    <div className="dadjoke-container">
      <h1>Dad Joke</h1>
      <p>{dadJoke.joke}</p>
      <button onClick={dadJokeAPI}>{loading ? "Loading" : "Get Joke"}</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
