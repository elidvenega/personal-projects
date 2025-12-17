import { useState } from "react";
import { quotes } from "./data";
import "./quote.css";

export default function Example() {
  const [newQuote, setNewQuote] = useState(quotes[0]);

  const handleQuote = () => {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    setNewQuote(quotes[randomQuote]);
  };
  return (
    <div className="quote-container">
      <p className="quote-text">{newQuote.text}</p>
      <p className="quote-show">{newQuote.show}</p>
      <img src={newQuote.img} alt="img" />
      <div style={{ padding: "20px" }}>
        <button className="quote-button" onClick={handleQuote}>
          Quote
        </button>
      </div>
    </div>
  );
}
