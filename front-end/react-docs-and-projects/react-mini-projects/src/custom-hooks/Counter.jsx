import useCounter from "./useCounter";

export default function Counter() {
  const { count, increment, decrement, reset, multiplyByTwo } = useCounter(10);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={multiplyByTwo}>x2</button>
    </div>
  );
}
