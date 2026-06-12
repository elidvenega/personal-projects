// useCounter.js
import { useState } from "react";

export default function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  const multiplyByTwo = () => {
    setCount((prev) => prev * 2);
  };

  return {
    count,
    increment,
    decrement,
    reset,
    multiplyByTwo
  };
}
