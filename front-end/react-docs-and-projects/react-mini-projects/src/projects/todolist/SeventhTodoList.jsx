import { useState } from "react";
import { data } from "./data";

let nextId = 5;
export default function SeventhTodoList() {
  const [todos, setTodos] = useState(data);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      const newTodos = {
        id: nextId++,
        task: input,
      };
      setTodos([...todos, newTodos]);
      setInput("");
    }
  };

  const handleDelete = (id) => {
    const newList = todos.filter((todo) => todo.id !== id);
    setTodos(newList);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        placeholder="Add a todo"
        onChange={(e) => {
          e.preventDefault();
          setInput(e.target.value);
        }}
      />
      <button type="button" onClick={addTodo}>
        Click
      </button>

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
