import { useState } from "react";
import { data } from "./data.js";

let nextId = 5;
export default function ThirdListTodo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(data);
  const handleInput = (e) => setInputValue(e.target.value);
  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      setTodos([
        ...todos,
        {
          id: nextId++,
          todo: inputValue,
        },
      ]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleDelete = (task) => {
    const newList = todos.filter((t) => t.id !== task);
    setTodos(newList);
  };
  return (
    <>
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add new todo"
          value={inputValue}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
        <button type="button" onClick={handleSubmit}>
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button type="button" onClick={() => handleDelete(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
