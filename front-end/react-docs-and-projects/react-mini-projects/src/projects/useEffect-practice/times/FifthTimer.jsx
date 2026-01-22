import { useState, useEffect } from "react";
import "./style.css";

export default function FifthTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);
  return (
    <div>
      <h1>Timer</h1>
      <h2> Seconds {seconds}</h2>
    </div>
  );
}
