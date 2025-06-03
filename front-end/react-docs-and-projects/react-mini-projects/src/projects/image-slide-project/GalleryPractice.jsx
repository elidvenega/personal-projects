import { useState } from "react";
import { sculptureList } from "./data";
// import "./image-gallery.css";

export default function GalleryPractice() {
  const [index, setIndex] = useState(0);
  const [isShown, setIsShown] = useState(false);

  /** 
   ** index which is 0 if is less than sculptureList.length - 1
   // ...existing code...
// Checks if there is a next sculpture in the list.
// 'index' is the current position, and 'sculptureList.length - 1' is the last valid index.
// If 'index' is less than the last index, there is a next item.
const hasNext = index < sculptureList.length - 1;
// ...existing code...
  */
  const currentIndex = index < sculptureList.length - 1;

  const handleIndex = () => {
    if (currentIndex) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handleShow = () => setIsShown(!isShown);

  const artWorks = sculptureList[index];
  return (
    <div>
      <img className="gallery-image" src={artWorks.url} alt={artWorks.alt} />
      <h2>
        {artWorks.name} by {artWorks.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <div>
        <button onClick={handleIndex}>Next</button>
        <button onClick={handleShow}>
          {isShown ? "Hide Details" : "Show Details"}
        </button>
        {/* {isShown ? (
          <p>{artWorks.description}</p>
         ): <p>kj</p>} */}
        {isShown && <p>{artWorks.description}</p>}
      </div>
    </div>
  );
}
