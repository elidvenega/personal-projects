import { useState } from "react";

import { desserts } from "./data";
import "./styles.css";

export default function DessertPractice() {
  const [index, setIndex] = useState(0);

  const handleNextDessert = () => {
    setIndex((prevIndex) => (prevIndex + 1) % desserts.length);
  };

  const handlePrevDessert = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + desserts.length) % desserts.length
    );
  };

  const dessert = desserts[index];
  return (
    <>
      <section className="sectionStyles">
        <h1>{dessert.name}</h1>
        <img className="image" src={dessert.image} alt={dessert.name} />
        <p>{dessert.message}</p>

        <button
          className="buttonStyles"
          type="button"
          onClick={handleNextDessert}
        >
          Next Dessert
        </button>
        <button
          className="buttonStyles"
          type="button"
          onClick={handlePrevDessert}
        >
          Last Dessert
        </button>
      </section>
    </>
  );
}
