import { useState } from "react";

interface AddTaskProps {
  dispatch: React.Dispatch<{
    type: "added";
    id: number;
    text: string;
  }>;
}

let nextId = 3;

export default function AddTask({ dispatch }: AddTaskProps) {
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    dispatch({ type: "added", id: nextId++, text: task });
    setTask("")
  };

  return (
    <>
      <input
        type="text"
        placeholder="Add Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" onClick={handleSubmit}>
        Add
      </button>
    </>
  );
}
