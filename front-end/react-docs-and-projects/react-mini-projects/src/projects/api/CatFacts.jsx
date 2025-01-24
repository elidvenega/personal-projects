import { useState, useEffect } from "react";

export default function CatFacts() {
  const [catInfo, setCatInfo] = useState([]);

  const catFacts = () => {
    try {
      const resp = fetch(`https://place.dog/300/200`);
      const data = resp.json();
      setCatInfo(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    catFacts();
  }, []);
  return (
    <>
      <ul>
        {catInfo.map((facts, i) => (
          <li key={i}>{facts}</li>
        ))}
      </ul>
    </>
  );
}
