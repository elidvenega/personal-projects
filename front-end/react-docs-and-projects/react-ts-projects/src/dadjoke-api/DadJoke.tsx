import { useState, useEffect } from "react";


export default function DadJoke() {
  const [dadJoke, setDadJoke] = useState("Dad Joke");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      console.log(data);
    } catch (err) {
      console.log("Something went wrong", err);
      setError("Failed to fetch a joke");
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
      <p> {dadJoke}</p>
      <button onClick={getDadJoke} disabled={loading}>
        {loading ? "Loading" : "Get new dad joke."}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
