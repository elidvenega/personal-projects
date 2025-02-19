import { useState, useEffect } from "react";

export default function AnimeQuote() {
  const [animeQuote, setAnimeQuote] = useState(null);

  const fetchApi = async () => {
    try {
      const resp = await fetch("http://localhost:3000/api/quote");
      const data = await resp.json();
      setAnimeQuote(data);
    } catch (e) {
      console.error("Error fetching quote:", e);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      {animeQuote ? (
        <p>
          {animeQuote.quote} - {animeQuote.character} ({animeQuote.anime})
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
