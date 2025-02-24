import { useState, useEffect } from "react";
import "./emoji.css";

export default function RandomQuote() {
  const [getEmoji, setGetEmoji] = useState([]);

  const handleFetchEmoji = async () => {
    try {
      const response = await fetch("http://localhost:3000/emoji");
      const data = await response.json();
      setGetEmoji(data);
    } catch (error) {
      console.error("Error fetching the quote:", error);
    }
  };

  useEffect(() => {
    handleFetchEmoji();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Random Emoji</h1>
        {getEmoji ? (
          <div>
            <div>
              <p className="emoji">{getEmoji.emoji}</p>
            </div>
            <button className="button" onClick={handleFetchEmoji}>
              Change Emoji
            </button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
