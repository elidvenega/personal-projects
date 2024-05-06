import { useState } from "react";
import "./buttonstyle.css";

export default function Button() {
  const [btn, setBtn] = useState(0);

  const handleIncrement = () => {
    setBtn((btn) => btn + 1);
  };
  const handleDecrement = () => {
    setBtn((btn) => btn - 1);
  };

  return (
    <>
      <section>
      <p>{btn}</p>
        <button onClick={handleIncrement}>Add</button>
        <button onClick={handleDecrement}>Subtract</button>
        
      </section>
    </>
  );
}
