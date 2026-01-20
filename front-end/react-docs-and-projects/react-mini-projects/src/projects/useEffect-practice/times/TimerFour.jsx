import { useState, useEffect } from "react";

export default function TimerFour() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("rendering");

    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h1>{seconds}</h1>
    </div>
  );
}
