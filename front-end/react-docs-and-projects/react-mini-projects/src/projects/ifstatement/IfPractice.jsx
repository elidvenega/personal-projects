import { useState } from "react";

const sectionStyles = {
  backgroundColor: "#1f2937",
  fontSize: "1.5rem",
  color: "#fff",
  padding: "3.5rem",
  margin: "auto",
  textAlign: "center",
};

const buttonStyles = {
  backgroundColor: "#a855f7",
  border: "none",
  borderRadius: "5px",
  color: "#fff",
  padding: "8px",
  textAlign: "center",
  margin: "5px",
  cursor: "pointer",
};

export default function IfPractice() {
  const [showContent, setShowContent] = useState(false);
  const handleShowContent = () => setShowContent((prev) => !prev);
  const handleReset = () => setShowContent(false);

  return (
    <>
      <section style={sectionStyles}>
        {showContent ? (
          <>
            <h1>Pumpkin Pie</h1>
            <img
              style={{
                borderRadius: "10%",
                width: "22rem",
                height: "22rem",
                objectFit: "cover",
                padding: "1rem",
              }}
              src="https://www.allrecipes.com/thmb/CQrgVw7qjs2QQfKqy0GMerfppsM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229932-Simple-Pumpkin-Pie-vat-hero-4x3-LSH-ae211272471a4e7aa9f10716cdcf4bc3.jpg"
              alt="Pumpkin Pie Dessert"
            />
            <p>Enjoy The Pie</p>
          </>
        ) : (
          <>
            <h2 style={{ fontSize: "3rem" }}>Hello</h2>
            <p>Click to show Content</p>
          </>
        )}
      </section>
      <button style={buttonStyles} type="button" onClick={handleShowContent}>
        {showContent ? "Hide Dessert" : "Show Dessert"}
      </button>
    </>
  );
}
