import { useState } from "react";

const todoList = [
  "Walk 20 mins",
  "Eat Dinner",
  "Read Book",
  "Create Schedule for meeting",
];

export default function TodoPractice() {
  const [todos, setTodos] = useState(todoList);
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

  return (
    <>
      <h1>Todo List</h1>
      <form action="">
        <input
          type="text"
          value={input}
          placeholder="Add Todo"
          onChange={handleInput}
        />
        <button type="button" onClick={handleSubmit}>
          Add
        </button>
      </form>
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
