import { useState, useEffect } from "react";
import "./style.css";

export default function SixthDadJoke() {
  const [dadJoke, setDadJoke] = useState(
    "Get a dad joke by clicking the button."
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getDadJoke() {
    setLoading(true);
    setError(null);
    try {
      const resp = await fetch(`https://icanhazdadjoke.com/ `, {
        headers: {
          Accept: "application/json",
        },
      });
      if(!resp.ok) {
        // El mesanje que estoy usando no describe muy bien el trow Error
        throw Error("Something went wrong");
      }
      const data = await resp.json();
      setDadJoke(data.joke)
    } catch (error) {
      console.error("Something went wrong", error);
      setError("Failed to fetch API");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDadJoke();
  }, []);

  return (
    <div className="dadjoke">
      <h1>Get dad joke's</h1>
      <p>{dadJoke}</p>
      <button onClick={getDadJoke} disabled={loading}>
        {loading ? "Loading" : "Get Joke"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
