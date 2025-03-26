import { useState } from "react";
import { data } from "./data";

let nextId = 5;
export default function ThirdPracticeTodo({ title }) {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(data);

  const handleSubmit = () => {
    if (input.trim() !== "") {
      const newTask = {
        id: nextId++,
        task: input,
      };
      setTodos([...todos, newTask]);
      setInput("");
    }
  };

  const handleDelete = (todo) => {
    const newList = todos.filter((task) => task.id !== todo);
    setTodos(newList);
  };
  return (
    <div>
      <h1>{title}</h1>
      <form action="">
        <input
          type="text"
          placeholder="Add Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button type="button" onClick={() => handleDelete(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
