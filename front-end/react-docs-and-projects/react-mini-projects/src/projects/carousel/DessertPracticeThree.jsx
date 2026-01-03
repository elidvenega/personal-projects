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

  const handleNextIndex = () => {
    setIndex((nextIndex) => (nextIndex + 1) % desserts.length);
  };

  const handlePrevIndex = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + desserts.length) % desserts.length
    );
  };

  const dessert = desserts[index];
  return (
    <section className="sectionStyles">
      <h1>{dessert.name}</h1>
      <img className="image" src={dessert.image} alt={dessert.name} />
      <p>{dessert.message}</p>
      <button className="buttonStyles" type="button" onClick={handleNextIndex}>
        Next
      </button>
      <button className="buttonStyles" type="button" onClick={handlePrevIndex}>
        Prev
      </button>
    </section>
  );
}
