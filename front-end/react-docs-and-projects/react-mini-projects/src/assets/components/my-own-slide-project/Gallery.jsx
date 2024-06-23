import { useState } from "react";
import { sculptureList } from "./data.js";

export default function Gallery() {
  // state in React
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const hasNext = index < sculptureList.length - 1;

  function handleNextClick() {
    hasNext ?  setIndex(index + 1):  setIndex(0);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  // this gets the index of the info in the array
  let sculpture = sculptureList[index];
  return (
    <>
      <div className="container">
        <h2>
          <i>{sculpture.name} </i>
          by {sculpture.artist}
        </h2>
        <h3>
          ({index + 1} of {sculptureList.length})
        </h3>

        <img src={sculpture.url} alt={sculpture.alt} />
        <div>
          <button onClick={handleNextClick}>Next</button>
          <button onClick={handleMoreClick}>
            {showMore ? "Hide" : "Show"} details
          </button>
        </div>
        {showMore && <p>{sculpture.description}</p>}
      </div>
    </>
  );
}
