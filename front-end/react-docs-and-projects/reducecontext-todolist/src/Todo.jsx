import { useState } from "react";

const todoList = ["Walk", "Eat", "Run"];
export default function Todo() {
  const [todos, setTodos] = useState(todoList);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => setInputValue(e.target.value);

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      setInputValue("");
      setTodos([...todos, inputValue]);
    }
  };

  const handleDelete = (index) => {
    const newLIst = [...todos];
    newLIst.splice(index, 1);
    setTodos(newLIst)
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="Add Todo"
          value={inputValue}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
        <button type="button" onClick={handleSubmit}>
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo}
            <button type="button" onClick={() => handleDelete(i)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
