import { useState, useEffect } from "react";

export default function CounterThree() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count}`;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}
