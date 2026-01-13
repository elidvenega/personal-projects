import { useState, useEffect } from "react";

export default function SixthCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count}`;
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
