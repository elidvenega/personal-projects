import { useState } from "react";
import "./todos.css";

const todaysTasks = ["Walk 20 mins", "Read 15 mins", "Get Groceries"];

export default function TodoPractice() {
  const [todos, setTodos] = useState(todaysTasks);
  const [input, setInput] = useState("");

  const handleInput = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    if (input.trim() !== "") {
      // const newArr = setTodos([...todos, input]);
      e.preventDefault();
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newArr);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <>
      <div className="container">
        <form action="">
          <h1>Todo List</h1>
          <input
            type="text"
            placeholder="Add Todo"
            value={input}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSubmit}>Add</button>
        </form>
        <ul>
          {todos.map((todo, i) => (
            <li key={i}>
              {todo}
              <button onClick={() => handleDelete(i)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
