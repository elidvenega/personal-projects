/* 
CSS Clasess im using
Section Tag Im using "sectionStyles"
Buttons I'm using "buttonStyles"
Image tag has "image" class

*/

import { useState } from "react";
import { desserts } from "./data";
import "./styles.css";

export default function DessertPracticeThree() {
  const [index, setIndex] = useState(0);

  const handleNextDessert = () => {
    setIndex((nextDessert) => (nextDessert + 1) % desserts.length);
  };

  const handlePrevDessert = () => {
    setIndex(
      (prevDessert) => (prevDessert - 1 + desserts.length) % desserts.length
    );
  };

  const dessert = desserts[index];

  return (
    <>
      <section className="sectionStyles">
        <h1>{dessert.name}</h1>
        <img className="image" src={dessert.image} alt="dessert" />
        <p>{dessert.message}</p>
        <button
          type="button"
          className="buttonStyles"
          onClick={handleNextDessert}
        >
          Next Dessert
        </button>
         <button
          type="button"
          className="buttonStyles"
          onClick={handlePrevDessert}
        >
          Prev Dessert
        </button>
      </section>
    </>
  );
}
