import { useState, useEffect } from "react";

export default function DogImageTwo() {
  // `https://dog.ceo/api/breeds/image/random`
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleGetDogImage() {
    setLoading(true);
    setError(null);
    try {
      const resp = await fetch(`https://dog.ceo/api/breeds/image/random`);
      const data = await resp.json();
      setImage(data.message);
      console.log(data);
    } catch (error) {
      console.error(error);
      setError("Failed to get Image");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    handleGetDogImage();
  }, []);

  return (
    <div>
      <h1>Get Dog Image</h1>
      <div>{image && <img src={image} alt="Dog Image" />}</div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button disabled={loading} type="button" onClick={handleGetDogImage}>
        {loading ? "...Loading" : "Get dog image"}
      </button>
    </div>
  );
}
