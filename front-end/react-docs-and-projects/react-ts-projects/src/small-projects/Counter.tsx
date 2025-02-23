import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState<number>(0);
  const handleIncrement = () => setNumber((number) => number + 1);
  const handleDecrement = () => setNumber((number) => Math.max(number, 1) - 1);
  const handleReset = () => setNumber(0);
  const handleMultiply = () => setNumber((number) => number * 2);
  return (
    <div>
      <h1>Number is {number}</h1>
      <button onClick={handleIncrement}>Add</button> <span></span>
      <button onClick={handleDecrement}>Decrease</button> <span></span>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleMultiply}>Multiply By 2</button>
    </div>
  );
}

// Chat GPT
// import { useState } from "react";

// export default function Counter() {
//   const [number, setNumber] = useState<number>(0);

//   const handleIncrement = () => setNumber((number) => number + 1);
//   const handleDecrement = () => setNumber((number) => number - 1);
//   const handleMultiply = () => setNumber((number) => number * 2);
//   const handleReset = () => setNumber(0);

//   return (
//     <div>
//       <h1>Number is {number}</h1>

//       <button onClick={handleIncrement}>Add</button>
//       <button onClick={handleDecrement}>Decrease</button>
//       <button onClick={handleMultiply}>Multiply</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// }
