import { useState, useEffect } from "react";
import "./style.css";

export default function SeventhDadJokesAPI() {
  const [dadJoke, setDadJoke] = useState("Click to get a dad joke.");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getDadJoke() {
    setLoading(true);
    setError(null);
    try {
      const dadJokeFetch = await fetch(`https://icanhazdadjoke.com`, {
        headers: {
          Accept: "application/json",
        },
      });
      if (!dadJokeFetch.ok) {
        throw Error("Failed to fetch data");
      }
      const data = await dadJokeFetch.json();
      setDadJoke(data.joke);
      console.log(data);
    } catch (err) {
      console.error("failed to fetch", err);
      setError("Failed to fetch API");
    } finally {
        // "Finnally" runs after "try" and "catch" main purpose of finally is essential clean up actions
      setLoading(false);
    }
  }

  useEffect(() => {
    getDadJoke();
  }, []);

  return (
    <div className="dadjoke">
      <h1>Dad Joke's API</h1>
      <p>{dadJoke}</p>
      <button onClick={getDadJoke} disabled={loading}>
        {loading ? "Loading Joke" : "Get a dad joke"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
