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
    //  1 % 3 will be at index 1  then 2 % 3 will be at index 2 and 3 % 3 will be at the first picture
    setIndex((nextIndex) => (nextIndex + 1) % desserts.length);
  };

  const handlePrevIndex = () => {
    // prevIndex is 2 - 1 = 1 + 3 would equal 4 % 3 = 1
    setIndex(
      (prevIndex) => (prevIndex - 1 + desserts.length) % desserts.length,
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
