import { useState } from "react";
import "./buttonstyle.css";

export default function Button() {
  const [btn, setBtn] = useState(0);

  const handleIncrement = () => setBtn((btn) => btn + 1);

  // The way AJ preferred
  // const handleDecrement = () => setBtn((btn) => Math.max(btn - 1, 0));

  // Chat GPT
  // const handleDecrement = () => {
  //   setBtn((btn) => (btn > 0 ? btn - 1 : 0));
  // };

  // Example I was doing first
  const handleDecrement = () => {
    setBtn((btn) => {
      if (btn > 0) {
        return btn - 1;
      }
      // setBtn(btn);
      return 0
    });
  };

  // const handleDecrement = () => {
  //   setBtn((btn) => {
  //     if (btn >= 1) {
  //       return btn - 1;
  //     }
  //     return 0;
  //   });
  // };

  const handleReset = () => setBtn(0);

  // const handleAlert = () => setBtn(alert(btn));

  const handleMultiplyByTwo = () => setBtn((btn) => btn * 2);

  return (
    <>
      <section>
        <p>{btn}</p>
        <button onClick={handleIncrement}>Add</button>
        <button onClick={handleDecrement}>Subtract</button>
        <button onClick={handleReset}>Reset</button>
        {/* <button onClick={handleAlert}>Message</button> */}
        <button onClick={handleMultiplyByTwo}>Multiply By Two</button>
      </section>
    </>
  );
}
