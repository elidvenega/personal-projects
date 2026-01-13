import { useState, useEffect } from "react";
import "./styles.css";
// studied 27 mins 01/09/2025
export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClicked = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.title = ` Clicked ${count}`;
  }, [count]);
  return (
    <div className="container">
      <button className="button" onClick={handleClicked}>
        Clicked {count} times
      </button>
      <p>{count > 10 ? "You clicked more than 10 times" : ""}</p>
    </div>
  );
}

// function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `Count: ${count}`;
//   }, [count]);

//   return (
//     <button onClick={() => setCount(count => count + 1)}>
//       Clicked {count} times
//     </button>
//   );
// }

// export default Counter;

// import { useState, useEffect } from "react";

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `Current count is ${count}`;
//   }, [count]);
//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>Click{count}</button>
//     </>
//   );
// }
