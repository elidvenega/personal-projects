import { useState } from "react";
import { sculptureList } from "./data";

export default function PracticeGalleryOne() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const nextIndex = index < sculptureList.length - 1;

  const handleNextCLick = () => {
    if (nextIndex) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handleShowMore = () => setShowMore(!showMore);

  let sculpture = sculptureList[index];

  return (
    <div>
      <h2>
        {sculpture.name} by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <div>
        <button onClick={handleNextCLick}>Next</button>
        <button onClick={handleShowMore}>
          {showMore ? "Hide" : "Show"} Details
        </button>
      </div>
      {showMore && <p>{sculpture.description}</p>}
    </div>
  );
}
