import { useState } from "react";
import { useTasksDispatch } from "./TaskContextPovider";

let nextId = 5;
export default function AddTask() {
  const [todo, setTodo] = useState("");
  const newTask = useTasksDispatch();
  const handleInput = (e) => setTodo(e.target.value);
  const handleSubmit = () => {
    if (todo.trim() !== "") {
      setTodo("");
      newTask({
        type: "added",
        id: nextId++,
        todo: todo,
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="Add Todo"
        value={todo}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit}>Add</button>
    </>
  );
}
