"use client";

import { useState, useEffect } from "react";

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
      const updatedList = [...todoList, inputValue];
      setTodoList(updatedList);
      setInputValue("");
      localStorage.setItem("todos", JSON.stringify(updatedList));
    }
  };
  const handleDelete = (index) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
    localStorage.setItem("todos", JSON.stringify(newList));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    // When the component mounts, check if there are todos in localStorage
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodoList(savedTodos);
    }
  }, []);

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
            onKeyDown={handleKeyDown}
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
