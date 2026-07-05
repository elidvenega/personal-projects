import { useState } from "react";

export default function IfPracticeTwo() {
  const [showContent, setShowContent] = useState(false);
  const handleShowContent = () => setShowContent(!showContent);
  return (
    <div>
      {showContent ? (
        <>
          <h1>You did it</h1>
        </>
      ) : (
        <>
          <h2>Hi how are you</h2>
        </>
      )}
      <button type="button" onClick={handleShowContent}>
        {showContent ? "Hide" : "Reveal"}
      </button>
    </div>
  );
}
