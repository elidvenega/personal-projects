import { useState, useEffect } from "react";

export default function DogImageFour() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleGetDogImg() {
    setError(null);
    setIsLoading(true);
    try {
      const resp = await fetch(`https://dog.ceo/api/breeds/image/random`);
      const data = await resp.json();
      setImage(data.message);
    } catch (error) {
      console.error(error);
      setError("Failed to get dog image");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    handleGetDogImg();
  }, []);

  return (
    <div>
      <h1>Get dog image</h1>
      <div>{image && <img src={image} alt="random dog Image" width={300} />}</div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button disabled={isLoading} type="button" onClick={handleGetDogImg}>
        {isLoading ? "...Loading" : "Get Dog Image"}
      </button>
    </div>
  );
}
