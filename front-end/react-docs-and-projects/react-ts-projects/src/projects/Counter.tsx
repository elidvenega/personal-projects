import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => setNumber((number) => number + 1);
  const handleDecrement = () => setNumber((number) => number - 1);
  const handleReset = () => setNumber(0);
  return (
    <div>
      <h1>Number is {number}</h1>
      <button onClick={handleIncrement}>Add</button> <span></span>
      <button onClick={handleDecrement}>Decrease</button> <span></span>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
