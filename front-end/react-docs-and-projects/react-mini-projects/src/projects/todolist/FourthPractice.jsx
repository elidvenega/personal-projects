import { useState } from "react";

const tasks = [
  { id: 0, task: "Walk 20 mins" },
  { id: 1, task: "Cook Food" },
  { id: 2, task: "Get Bike" },
  { id: 3, task: "Go tp gym" },
];

export default function FourthPractice() {
  const [todos, setTodos] = useState(tasks);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = () => {
    if (newTask.trim() !== "") {
      setTodos([...todos, { id: todos.length, task: newTask }]);
      setNewTask("");
    }
  };

  const handleDelete = (i) => {
    const newList = todos.filter((todos) => todos.id !== i);
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
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add New Todo"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>
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
