import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount((count) => count + 1);
  const handleDecrease = () => setCount((count) => count - 1);
  const handleReset = () => setCount(0);
  return (
    <div>
      <h1>Number is {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
