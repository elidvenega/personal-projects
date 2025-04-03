import { useState } from "react";
import { data } from "./data";

let nextId = 5;
export default function PracticeList() {
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState(data);

  const handleSubmit = () => {
    if (newTask.trim() !== "") {
      const newTodos = {
        id: todos.length,
        task: newTask,
      };
      setTodos([...todos, newTodos]);
      setNewTask("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };
  const handleDelete = (i) => {
    const newList = todos.filter((todo) => todo.id !== i);
    setTodos(newList);
  };
  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add Todo"
        name="todo-list"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={handleSubmit}>
        Add Todo
      </button>

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
    </>
  );
}
