import { useState } from "react";
import { useDispatch } from "./TaskContextProvider";

let nextId = 3;
export default function AddTask() {
  const [newTasks, setNewTasks] = useState("");
  const addTodo = useDispatch();

  const handleNewTask = (e) => setNewTasks(e.target.value);
  const handleSubmit = () => {
    if (newTasks.trim() !== "") {
      setNewTasks("");
      addTodo({
        type: "added",
        task: newTasks,
        id: nextId++,
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
        value={newTasks}
        onChange={handleNewTask}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={handleSubmit}>
        Add
      </button>
    </>
  );
}
