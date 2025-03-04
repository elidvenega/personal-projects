import { useState } from "react";

const dailyTodos = ["Work", "Work Out", "Play Guitar", "Eat"];
export default function TodoList() {
  const [todos, setTodos] = useState(dailyTodos);
  const [input, setInput] = useState("");

  const handleInput = (e) => setInput(e.target.value);

  const handleSubmit = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
    const newList = [...todos];
    newList.splice(index, 1);
    setTodos(newList);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };
  return (
    <div>
      <h1>TodoList</h1>
      <form action="">
        <input
          type="text"
          placeholder="Add Todo"
          value={input}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
        <button type="button" onClick={handleSubmit}>
          Add
        </button>
      </form>
      <ul>
        {todos.map((text, i) => (
          <li key={i}>
            {text}
            <button type="button" onClick={() => handleDelete(i)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
