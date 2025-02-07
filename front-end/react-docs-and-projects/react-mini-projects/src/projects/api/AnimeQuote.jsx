import { useState, useEffect } from "react";

export default function AnimeQuote() {
    const [animeQuote, setAnimeQuote] = useState(null);
  
    const fetchApi = async () => {
      try {
        const resp = await fetch(`https://cors-anywhere.herokuapp.com/https://animechan.io/api/v1/quotes/random`);
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
          <p>{animeQuote.quote} - {animeQuote.character} ({animeQuote.anime})</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
  