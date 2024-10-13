import { useState } from "react";
import { useDispatch } from "./TaskContextProvider";

let nextId = 3;
export default function AddTask() {
  const [task, setTask] = useState("");
  const addTodo = useDispatch();

  const handleInput = (e) => setTask(e.target.value);
  const handleSubmit = () => {
    if (task.trim() !== "") {
      setTask("");
      addTodo({
        type: "added",
        id: nextId++,
        todo: task,
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
        value={task}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit}></button>
    </>
  );
}
