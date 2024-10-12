"use client";

import { useState, useEffect } from "react";

const todaysList = [
  "Work Out 30 mins",
  "Grocery Shopping",
  "Go to eat with friends",
];

export default function TodoList() {
  const [todoList, setTodoList] = useState(todaysList);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => setInputValue(e.target.value);

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      const submitTodos = [...todoList, inputValue];
      setTodoList(submitTodos);
      setInputValue("");
      localStorage.setItem("todos", JSON.stringify(submitTodos));
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
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      savedTodos;
    }
  }, []);
  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
        <form action="">
          <input
            type="text"
            placeholder="Add Todo"
            value={inputValue}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
          />
          <button type="button" className="btn" onClick={handleSubmit}>
            Add
          </button>
        </form>
      </div>

      <ul>
        {todoList.map((task, index) => (
          <li key={index}>
            {task}
            <button className="del-btn" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
