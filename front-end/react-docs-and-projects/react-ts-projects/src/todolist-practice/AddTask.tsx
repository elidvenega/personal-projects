import { useState } from "react";

interface AddTasksProps {
  dispatch: React.Dispatch<{
    type: "added";
    id: number;
    text: string;
  }>;
}

let nextId = 3;

export default function AddTask({ dispatch }: AddTasksProps) {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    dispatch({ type: "added", id: nextId++, text: task });
    setTask("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Add Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </>
  );
}
