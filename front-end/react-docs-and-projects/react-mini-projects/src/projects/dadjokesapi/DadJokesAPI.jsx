import { useEffect, useState } from "react";
import "./style.css";

export default function DadJokesAPI() {
  const [dadJoke, setDadJoke] = useState("Click the button to get a dad joke!");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getDadJoke() {
    setLoading(true);
    setError(null);
    try {
      const getJoke = await fetch(` https://icanhazdadjoke.com`, {
        headers: {
          Accept: "application/json",
        },
      });
      if (!getJoke.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await getJoke.json();

      setDadJoke(data.joke);
    } catch (e) {
      setError("Failed to fetch a joke. Please try again.");
      console.error("Error fetching dad joke:", e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
   getDadJoke()
  },[])

  return (
    <div className="dadjoke-container">
      <h1>Dad Jokes</h1>
      <button onClick={getDadJoke} disabled={loading}>
        {loading ? "Fetching" : "Get New Dad Joke"}
      </button>
      <p>{dadJoke}</p>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
