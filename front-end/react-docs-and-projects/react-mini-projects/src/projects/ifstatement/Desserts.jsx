import { useState } from "react";
import "./styles.css";
// const sectionStyles = {
//   backgroundColor: "#1f2937",
//   fontSize: "1.5rem",
//   color: "#fff",
//   padding: "3.5rem",
//   margin: "auto",
//   textAlign: "center",
// };

// const buttonStyles = {
//   backgroundColor: "#a855f7",
//   border: "none",
//   borderRadius: "5px",
//   color: "#fff",
//   padding: "8px 12px",
//   textAlign: "center",
//   margin: "5px",
//   cursor: "pointer",
//   fontSize: "1rem",
// };

// Dessert data
const desserts = [
  {
    name: "Pumpkin Pie",
    image: "../../../public/images/pumpkin-pie.jpg",
    message: "Enjoy the Pumpkin Pie!",
  },
  {
    name: "Apple Pie",
    image: "../../../public/images/apple-pie.jpg",
    message: "Sweet and warm Apple Pie!",
  },
  {
    name: "Chocolate Cake",
    image: "../../../public/images/choclate-cake.jpg",
    message: "Delicious Chocolate Cake!",
  },
];

export default function Desserts() {
  const [index, setIndex] = useState(0);

  const handleNextDessert = () => {
    setIndex((prevIndex) => (prevIndex + 1) % desserts.length);
  };

  const dessert = desserts[index];

  return (
    <>
      <section className="sectionStyles">
        <h1>{dessert.name}</h1>
        <img
          style={{
            borderRadius: "10%",
            width: "22rem",
            height: "22rem",
            objectFit: "cover",
            padding: "1rem",
          }}
          src={dessert.image}
          alt={dessert.name}
        />
        <p>{dessert.message}</p>

        <button
          className="buttonStyles"
          type="button"
          onClick={handleNextDessert}
        >
          Next Dessert
        </button>
      </section>
    </>
  );
}
