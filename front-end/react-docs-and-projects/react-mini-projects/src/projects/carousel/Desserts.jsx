import { useState } from "react";
import "./styles.css";

// Dessert data
const desserts = [
  {
    name: "Pumpkin Pie",
    image: "../../../images/pumpkin-pie.jpg",
    message: "Enjoy the Pumpkin Pie!",
  },
  {
    name: "Apple Pie",
    image: "../../../images/apple-pie.jpg",
    message: "Sweet and warm Apple Pie!",
  },
  {
    name: "Chocolate Cake",
    image: "../../../images/choclate-cake.jpg",
    message: "Delicious Chocolate Cake!",
  },
];

export default function Desserts() {
  const [index, setIndex] = useState(0);

  // No entiendo porque se esta usando modulo
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
