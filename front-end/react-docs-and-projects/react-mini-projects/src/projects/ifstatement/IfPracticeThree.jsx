import React, { useState } from "react";

export default function IfPracticeThree() {
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => setShowContent((prev) => !prev);
  return (
    <div>
      <h1>Using if statements</h1>

      {showContent ? (
        <>
          <h2>You did it</h2>
        </>
      ) : (
        <>
          <h2>Almost</h2>
        </>
      )}

      <button onClick={handleClick} type="button">
        {showContent ? "Hide" : "reveal"}
      </button>
    </div>
  );
}
