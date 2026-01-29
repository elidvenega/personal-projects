import { useEffect, useState } from "react";
import "./style.css";

export default function DogImage() {
  const [image, setImage] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleGetDogImg() {
    setLoading(true);
    setError(null);
    try {
      const resp = await fetch(`https://dog.ceo/api/breeds/image/random`);
      const data = await resp.json();
      setImage(data.message);
    } catch (err) {
      setError("Failed to get dog image.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleGetDogImg();
  }, []);

  return (
    <div className="dog-img-container">
      <h1>Random Dog Image</h1>
      {error && <p className="error-message" style={{ color: "red" }}>{error}</p>}
      <div>
        {image && <img className="dog-image" src={image} alt="Random dog" />}
      </div>
      <button
        disabled={isLoading}
        className="dog-image-button"
        type="button"
        onClick={handleGetDogImg}
      >
        {isLoading ? "Loading..." : "New Image"}
      </button>
    </div>
  );
}
