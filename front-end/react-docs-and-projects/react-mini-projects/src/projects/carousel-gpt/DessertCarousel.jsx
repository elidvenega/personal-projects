import { useState, useEffect } from "react";
import { desserts } from "./data";
import "./DessertCarousel.css";

export default function DessertCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev === desserts.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  const handleNextDessert = () => {
    // index 0 === 3 - 1 and thats 0 if not add by one
    // Thats how I understand the code
    setIndex((prevIndex) =>
      // index is 1 === 2 it goes to the next one
      prevIndex === desserts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevDessert = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? desserts.length - 1 : prevIndex - 1
    );
  };

  const dessert = desserts[index];

  return (
    <div className="carousel-container">
      {/* key ensures fade animation on change */}
      <section
        key={dessert.name}
        className="carousel-section fade"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <h1>{dessert.name}</h1>
        <img
          className="carousel-image"
          src={dessert.image}
          alt={dessert.name}
        />
        <p>{dessert.message}</p>
      </section>

      <div className="button-group">
        <button className="carousel-button" onClick={handlePrevDessert}>
          Previous
        </button>
        <button className="carousel-button" onClick={handleNextDessert}>
          Next
        </button>
      </div>

      <div className="dots">
        {desserts.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`dot ${i === index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
