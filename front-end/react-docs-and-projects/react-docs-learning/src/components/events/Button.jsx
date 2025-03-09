import { useState } from "react";
import "./buttonstyle.css";

export default function Button() {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => setNumber((number) => number + 1);

  // The way AJ preferred
  // const handleDecrement = () => setNumber((number) => Math.max(number - 1, 0));

  // Chat GPT
  // const handleDecrement = () => {
  //   setNumber((number) => (number > 0 ? number - 1 : 0));
  // };

  // Example I was doing first
  const handleDecrement = () => {
    setNumber((number) => {
      if (number > 0) {
        return number - 1;
      }
      // setBtn(btn);
      return 0;
    });
  };

  const handleReset = () => setNumber(0);
  const handleMultiplyByTwo = () => setNumber((number) => number * 2);
  // const handleAlert = () => setBtn(alert(btn));

  return (
    <>
      <section>
        <p>{number}</p>
        <button onClick={handleIncrement}>Add</button>
        <button onClick={handleDecrement}>Subtract</button>
        <button onClick={handleReset}>Reset</button>
        {/* <button onClick={handleAlert}>Message</button> */}
        <button onClick={handleMultiplyByTwo}>Multiply By Two</button>
      </section>
    </>
  );
}
