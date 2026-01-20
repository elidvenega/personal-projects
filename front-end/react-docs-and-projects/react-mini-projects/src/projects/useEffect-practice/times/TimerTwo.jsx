import { useState, useEffect } from "react";

export default function TimerTwo() {
  const [second, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <p>{second}</p>
    </div>
  );
}
