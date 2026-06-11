import { useState } from "react";

const todos = [
  { id: 0, todo: "Walk" },
  { id: 1, todo: "Cook" },
  { id: 2, todo: "Pay Bills" },
  { id: 3, todo: "Clean apartment" },
];

// const todos = [
//   { id: 0, todo: "Walk" },
//   { id: 1, todo: "Cook" },
//   { id: 2, todo: "Pay Bills" },
//   { id: 3, todo: "Clean apartment" },
// ];


// put up an input to add and a button
// loop through array
// also add delete button

let nextId = 4;
export default function Todo() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(todos);
  const handleSubmit = () => {
    if (input.trim() !== "") {
      const addTask = {
        id: nextId++,
        todo: input,
      };
      setTodo([...todo, addTask]);
      setInput("");
    }
  };
  return (
    <>
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add todo"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            e.preventDefault();
          }}
        />
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </div>
      <ul>
        {todo.map((t) => (
          <li key={t.id}>
            {t.todo}
            <button
              type="button"
              onClick={() => setTodo(todo.filter((task) => task.id !== t.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
