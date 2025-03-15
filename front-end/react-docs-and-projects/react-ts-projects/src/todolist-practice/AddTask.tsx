import { useState } from "react";

interface AddTask {
  dispatch: React.Dispatch<{
    type: "added";
    id: number;
    text: string;
  }>;
}

let nextId = 3;

export default function AddTask({ dispatch }: AddTask) {
  const [addTask, setAddTask] = useState("");
  const handleSubmit = () => {
    dispatch({ type: "added", id: nextId++, text: addTask });
    setAddTask("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add Todo"
        value={addTask}
        onChange={(e) => setAddTask(e.target.value)}
      />
      <button type="button" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}
