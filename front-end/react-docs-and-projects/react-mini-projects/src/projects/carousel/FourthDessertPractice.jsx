import React, { useState } from "react";
import "./styles.css";
import { desserts } from "./data";

/* 
CSS Clasess im using
Section Tag Im using "sectionStyles"
Buttons I'm using "buttonStyles"
Image tag has "image" class

*/

export default function FourthDessertPractice() {
  const [dessertIndex, setDessertIndex] = useState(0);

  // create a function to go to the next picture
  const nextIndex = () =>
    setDessertIndex((nextIndex) => (nextIndex + 1) % desserts.length);

  const dessert = desserts[dessertIndex];
  return (
    <section className="sectionStyles">
      <img src={dessert.image} className="image" alt="dessert" />
      <button onClick={nextIndex}>Next</button>
    </section>
  );
}
