import { useState } from "react";
import { data } from "./data";

export default function FIfthTodoList() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(data);

  const handleSubmit = () => {
    if (input.trim() === "") return; // Prevent adding empty todos
    const newTodo = {
      id: todos.length,
      task: input,
    };
    setTodos([...todos, newTodo]);
    setInput(""); // Clear input after submission
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add Todo"
        value={input}
        onChange={(e) => {
          e.preventDefault();
          setInput(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
