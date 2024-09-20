import { useState } from "react";
import { useTasksDispatch } from "./TaskContext";

export default function AddTask() {
  const [task, setTask] = useState("");
  const addTask = useTasksDispatch();
  let nextId = 3;
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
