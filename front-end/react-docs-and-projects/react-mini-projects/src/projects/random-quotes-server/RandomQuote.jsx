import { useState, useEffect } from "react";
import "./index.css";

export default function RandomQuote() {
  const [quote, setQuote] = useState(null);

  const fetchQuote = async () => {
    try {
      const response = await fetch("http://localhost:3000/random-quote");
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.error("Error fetching the quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="container">
      <h1>Random Quote</h1>
      {quote ? (
        <div>
          <p>"{quote.text}"</p>
          <p>
            <strong>- {quote.author}</strong>
          </p>
          <button className="button" onClick={fetchQuote}>Get Another Quote</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
