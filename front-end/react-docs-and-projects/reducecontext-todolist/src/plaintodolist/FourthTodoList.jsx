import { useState } from "react";
import { data } from "./data";

let nextId = 5;
export default function () {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(data);

  const handleInput = (e) => setInputValue(e.target.value);
  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      const addTodos = {
        id: nextId++,
        todo: inputValue,
      };
      setTodos([...todos, addTodos]);
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
    const newList = todos.filter((todo) => todo.id !== task);
    setTodos(newList);
  };
  return (
    <>
      <h1>Todo List</h1>
      <form action="">
        <input
          type="text"
          placeholder="Add todo"
          value={inputValue}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
        <button type="button" onClick={handleSubmit}>
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
