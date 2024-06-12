import React, { useRef, useEffect } from 'react';

const InputWithRef = () => {
  // The useRef hook creates a mutable object called a "ref"
  const inputRef = useRef(null);

  // useEffect can be used to perform actions after the initial render
  useEffect(() => {
    // Focus on the input element when the component mounts
    inputRef.current.focus();
  }, []);

  const handleButtonClick = () => {
    // Access the current value of the input using the ref
    alert(`Input value: ${inputRef.current.value}`);
  };

  return (
    <div>
      {/* Attach the ref to the input element */}
      <input ref={inputRef} type="text" placeholder="Type something..." />

      {/* Button to trigger an action using the ref */}
      <button onClick={handleButtonClick}>Get Input Value</button>
    </div>
  );
};

export default InputWithRef;
