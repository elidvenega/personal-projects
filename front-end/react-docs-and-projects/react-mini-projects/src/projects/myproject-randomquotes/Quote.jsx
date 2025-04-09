import { useState } from "react";

const quotes = [
  "Walk Each Day",
  "Never Give Up",
  "Work Hard and Believe in God",
  "Victory Is Around The Corner",
  "Believe in Yourself",
  "Persist and dont't surrender",
];

export default function Quote() {
  const [newQuote, setNewQuote] = useState(quotes[0]);

  const handleRandomQuote = () => {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    setNewQuote(quotes[randomQuote]);
  };
  return (
    <div>
      <h1>Random Quote</h1>
      <p>{newQuote}</p>
      <button onClick={handleRandomQuote}>Quote</button>
    </div>
  );
}
