import { useState, useEffect } from "react";
import "./style.css";

export default function DadJokesFour() {
  const [dadJoke, setDadJoke] = useState("Click to get dad joke.");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getDadJoke() {
    setLoading(true);
    setError(null);
    try {
      const resp = await fetch(`https://icanhazdadjoke.com`, {
        headers: {
          Accept: "application/json",
        },
      });
      if(!resp.ok) {
        throw Error("Network response was not ok")
      }
      const data = await resp.json();
   
      setDadJoke(data.joke);
      console.log(data);
    } catch (err) {
      setError("Something went wrong");
      console.error("Failed to get joke", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDadJoke();
  }, []);

  return (
    <div className="dadjoke-container">
      <h1>Dad Joke's</h1>
      <p>{dadJoke}</p>
      <button onClick={getDadJoke} disabled={loading}>
        {loading ? "Loading" : "Get dad Joke"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
