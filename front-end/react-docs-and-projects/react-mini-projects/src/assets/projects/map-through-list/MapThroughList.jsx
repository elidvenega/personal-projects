import { useState } from "react";
import "./style.css";

const todoList = [
  { id: 0, task: "Work" },
  { id: 1, task: "Eat" },
  { id: 2, task: "Walk 30 mins" },
  { id: 3, task: "Guitar Practice" },
];

export default function MapThroughList() {
  const [todo, setTodo] = useState(todoList);

  const handleDelete = (id) => {
    const updatedTodos = todo.filter((todo) => todo.id !== id);
    setTodo(updatedTodos);
  };
  return (
    <div className="container">
      <h1>Todo List</h1>
      <ul>
        {todo.map((todos) => (
          <li key={todos.id}>
            {todos.task}
            <button type="button" onClick={() => handleDelete(todos.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
