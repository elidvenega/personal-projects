import { useState } from "react";
import { useTasksDispatch } from "./TaskContext";


let nextId = 3;
export default function AddTask() {
  const [task, setTask] = useState("");
  const addTask = useTasksDispatch();

  return (
    <>
      <input
        type="text"
        placeholder="Add Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          setTask("");
          addTask({
            type: "added",
            id: nextId++,
            text: task,
          });
        }}
      >
        Add
      </button>
    </>
  );
}
