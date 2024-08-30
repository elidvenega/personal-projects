import { useState } from "react";
import "./buttonstyle.css";

export default function Button() {
  const [btn, setBtn] = useState(0);

  const handleIncrement = () => setBtn((btn) => btn + 1);

  const handleDecrement = () => setBtn((btn) => btn - 1);

  const handleReset = () => setBtn(0);

  const handleAlert = () => setBtn(alert("Hello"));

  return (
    <>
      <section>
        <p>{btn}</p>
        <button onClick={handleIncrement}>Add</button>
        <button onClick={handleDecrement}>Subtract</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleAlert}>Message</button>
      </section>
    </>
  );
}
