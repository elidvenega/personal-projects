import { useState } from "react";

const todos = ["Walk", "Groceries", "Play Music"];
export default function PracticeList() {
  const [tasks, setTasks] = useState(todos);
  const [input, setInput] = useState("");

  const handleInput = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, input]);
    setInput("");
  };

  const handleDelete = (index) => {
    const newTodos = [...tasks];
    newTodos.splice(index, 1);
    setTasks(newTodos);
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Add Todo"
          value={input}
          onChange={handleInput}
        />
        <button type="button" onClick={handleSubmit}>
          Add
        </button>
      </form>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            {task}
            <button onClick={() => handleDelete(i)}>Delete</button>
            </li>
        ))}
      </ul>
    </div>
  );
}
