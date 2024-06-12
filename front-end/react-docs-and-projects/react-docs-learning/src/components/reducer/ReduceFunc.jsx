import { useState, useReducer } from "react";

/* Complex Way of using useReducer */
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  MULTIPLYBYTWO: "multiplybytwo",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.MULTIPLYBYTWO:
      return { count: state.count * 2 };
    default:
      return state;
  }
}

export default function UseReducerHook() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  function multiplyByTwo() {
    dispatch({ type: ACTIONS.MULTIPLYBYTWO });
  }
  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
      <button onClick={multiplyByTwo}>Times 2</button>
    </>
  );
}

// const ACTIONS = {
//   ADD_TODO: "add-todo",
// };

// function reducer(todos, action) {
//   switch (action.type) {
//     case ACTIONS.ADD_TODO:
//       return [...todos, newTodo(action.payload.name)];
//   }
// }

// function newTodo(name) {
//   return { id: Date.now(), name: name, complete: false };
// }

// export default function UseReducerHook() {
//   const [todos, dispatch] = useReducer(reducer, []);
//   const [name, setName] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
//     setName("");
//   }

//   console.log(todos);

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           target="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </form>
//     </>
//   );
// }
