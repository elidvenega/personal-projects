/* 
CSS Clasess im using
Section Tag Im using "sectionStyles"
Buttons I'm using "buttonStyles"
Image tag has "image" class

*/

import { useState } from "react";
import { desserts } from "./data";
import "./styles.css";

export default function FourthDessertPractice() {
  const [dessertIndex, setDessertIndex] = useState(0);

  const handleNextDessert = () =>
    setDessertIndex((nextDessert) => (nextDessert + 1) % desserts.length);
  const handlePrevDessert = () =>
    setDessertIndex(
      (prevDessert) => (prevDessert - 1 + desserts.length) % desserts.length,
    );

  const dessert = desserts[dessertIndex];
  return (
    <section className="sectionStyles">
      <h1>{dessert.name}</h1>
      <img className="image" src={dessert.image} alt={dessert.alt} />
      <p>{dessert.message}</p>
      <button
        className="buttonStyles"
        type="button"
        onClick={handleNextDessert}
      >
        Next
      </button>
      <button
        className="buttonStyles"
        type="button"
        onClick={handlePrevDessert}
      >
        Prev
      </button>
    </section>
  );
}
