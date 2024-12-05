import { useReducer } from "react";
import "./counter.css";

const currentNumber = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };

    case "decrement":
      return {
        count: Math.max(0, state.count - 1),
      };
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, currentNumber);
  const handleIncrement = () => {
    dispatch({
      type: "increment",
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: "decrement",
    });
  };
  return (
    <>
      <div className="container">
        <h1>Simple Counter</h1>
        <p>Current value is: {state.count}</p>
        <button onClick={handleIncrement}>Add by One</button>
        <button onClick={handleDecrement}> Decrease By One</button>
      </div>
    </>
  );
}
