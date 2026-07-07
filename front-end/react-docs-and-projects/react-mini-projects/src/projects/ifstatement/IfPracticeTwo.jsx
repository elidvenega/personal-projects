import { useState } from "react";

export default function IfPracticeTwo() {
  const [showContent, setShowContent] = useState(false);

  const handleContent = () => setShowContent((prev) => !prev);
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
      <button type="button" onClick={handleContent}>
        {showContent ? "Hide" : "Reveal"}
      </button>
    </div>
  );
}
