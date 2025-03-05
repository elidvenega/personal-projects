import { useState } from "react";

const quotes = ["Work", "Play", "never Give Up"];

export default function Example() {
  const [newQuote, setNewQuote] = useState(quotes[0]);

  const handleQuote = () => {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    setNewQuote(quotes[randomQuote]);
  };
  return (
    <div>
      {newQuote}
      <button onClick={handleQuote}>Quote</button>
    </div>
  );
}
