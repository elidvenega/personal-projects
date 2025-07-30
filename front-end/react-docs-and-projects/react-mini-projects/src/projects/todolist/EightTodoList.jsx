import { useState } from "react";
import { data } from "./data";

let nextId = 5;
export default function EightTodoList() {
  const [todos, setTodos] = useState(data);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      const newTodos = {
        id: nextId++,
        task: input,
      };

      setTodos([...todos, newTodos]);
      setInput("");
    }
  };

  const handleDelete = (todo) => {
    const newList = todos.filter((task) => task.id !== todo);
    setTodos(newList);
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
      <button onClick={handleAddTodo}>Add</button>

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
