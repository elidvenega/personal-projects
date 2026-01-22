import { useEffect, useState } from "react";

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
    <div>
      <h1>Random Dog</h1>
      {image && <img src={image} alt="Random dog" width="300" />}
      <button type="button" onClick={handleGetDogImg}>
        new image
      </button>
    </div>
  );
}
