import { useState, useEffect } from "react";
import "./anime.css";

export default function AnimeAPI() {
  const [anime, setAnime] = useState([]);

  async function animeQuotes() {
    try {
      const resp = await fetch("https://animechan.xyz/api/quotes");
      const data = await resp.json();
      console.log(data);
      setAnime(data);
    } catch (e) {
      console.log("error", e);
    }
  }

  useEffect(() => {
    animeQuotes();
  }, []);
  return (
    <>
      <h1>API Anime</h1>
      <ul>
        {/* returns a new array */}
        {anime.map((item, i) => {
          return (
            <li key={i}>
              Anime Title:{item.anime} <br />
              Character:{item.character} <br />
              Quote:{item.quote}
            </li>
          );
        })}
      </ul>
    </>
  );
}
