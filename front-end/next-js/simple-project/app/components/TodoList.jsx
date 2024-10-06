"use client";

import { useState } from "react";

const todos = [
  "Exercise 30 mins",
  "Read 20 mins",
  "Guitar Scales Practice",
  "Cook",
];
export default function TodoList() {
  const [todoList, setTodoList] = useState(todos);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => setInputValue(e.target.value);

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      setTodoList([...todoList, inputValue]);
      setInputValue("");
    }
  };
  const handleDelete = (index) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
  };
  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
        <form action="">
          <input
            type="text"
            placeholder="Todo List"
            value={inputValue}
            onChange={handleInput}
          />
          <button type="button" onClick={handleSubmit}>
            Add
          </button>
        </form>
        <ul>
          {todoList.map((list, index) => (
            <li key={index}>
              {list}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
