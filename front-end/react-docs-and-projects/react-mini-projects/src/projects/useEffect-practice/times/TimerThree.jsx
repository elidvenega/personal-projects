import { useState, useEffect } from "react";

export default function TimerThree() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    },1000);

    return () => clearInterval(id);
  }, []);
  return <div>{seconds}</div>;
}
