import { useState, useEffect } from "react";
import "./style.css";

export default function FifthDadJoke() {
  const [dadJoke, setDadJoke] = useState("CLick button to get dad joke");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getDadJoke() {
    setLoading(true);
    setError(null);
    try {
      const resp = await fetch(`https://icanhazdadjoke.com/`, {
        headers: {
          Accept: "application/json",
        },
      });
      if (!resp.ok) {
        throw Error("Network response was not ok");
      }
      const data = await resp.json();
      setDadJoke(data.joke);
      console.log(data.joke);
    } catch (err) {
      console.error("Something went wrong:", err);
      setError("Failed getting joke.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDadJoke();
  }, []);

  return (
    <div className="dadjoke">
      <h1>Dad Joke's</h1>
      <p>{dadJoke}</p>
      <button onClick={getDadJoke} disabled={loading}>
        {loading ? "Loading" : "Get dad joke"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
