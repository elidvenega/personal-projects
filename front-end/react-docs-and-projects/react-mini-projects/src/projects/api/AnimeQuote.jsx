import { useState, useEffect } from "react";

export default function AnimeQuote() {
  const [animeQuote, setAnimeQuote] = useState([]);

  const fetchApi = async () => {
    try {
      const resp = await fetch(`https://animechan.io/api/v1/quotes/random`);
      const data = await resp.json();
      setAnimeQuote(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <ul>
        {animeQuote.map((anime) => (
          <li key={anime.id}>{anime.data.content}</li>
        ))}
      </ul>
    </>
  );
}
