import { useState } from "react";
import { todos } from "./data";
import "./todos.css";

let nextId = 6;
export default function PracticeList() {
  const [addTask, setAddTask] = useState("");
  const [task, setTask] = useState(todos);

  const handleNewTask = (e) => setAddTask(e.target.value);
  const handleSubmit = () => {
    if (addTask.trim() !== "") {
      const newList = {
        id: nextId++,
        task: addTask,
      };
      setTask([...task, newList]);
      setAddTask("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleDelete = (index) => {
    const newTodos = task.filter((t) => t.id !== index);
    setTask(newTodos);
  };

  return (
    <>
      <div className="container">
        <form action="">
          <h1>Todo List</h1>
          <input
            type="text"
            placeholder="Add Todo"
            value={addTask}
            onChange={handleNewTask}
            onKeyDown={handleKeyDown}
          />
          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
        </form>

        <ul>
          {task.map((todo) => (
            <li key={todo.id}>
              {todo.task}
              <button type="button" onClick={() => handleDelete(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
