"use client";

import { useState } from "react";

export default function TodoList() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const handleInput = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, text]);
    setText("");
  };

  const handleDelete = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList)
  };

  return (
    <>
      <h1>Todo List</h1>
      <div className="container">
        <form>
          <input
            type="text"
            value={text}
            placeholder="Add Todo"
            onChange={handleInput}
          />
          <button onClick={handleSubmit}>Add</button>
        </form>

        <ul>
          {list.map((text, index) => (
            <li key={index}>
              {text}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
