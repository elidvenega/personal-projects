import { useState, useEffect } from "react";

export default function DogImageThree() {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleGetDogImage() {
    setIsLoading(true);
    setError(null);
    try {
      const resp = await fetch(`https://dog.ceo/api/breeds/image/random`);
      const data = await resp.json();
      setImage(data.message);
    } catch (error) {
      console.error(error);
      setError("Failed to get dog Image");
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    handleGetDogImage();
  }, []);
  return (
    <div>
      <h1>Get dog image</h1>
      <div>{image && <img src={image} alt="Dog Image"  width={300} height={200}/>}</div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button disabled={isLoading} type="button" onClick={handleGetDogImage}>
        {isLoading ? "...Loading" : "Get dog image"}
      </button>
    </div>
  );
}
