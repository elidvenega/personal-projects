import useCounter from "./useCounter";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
