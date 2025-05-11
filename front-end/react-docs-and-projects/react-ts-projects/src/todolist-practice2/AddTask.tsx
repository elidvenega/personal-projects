import { useState } from "react";

interface AddTask {
  dispatch: React.Dispatch<{
    type: "added";
    id: number;
    text: string;
  }>;
}
let nextId: number = 3;

export default function AddTask({ dispatch }: AddTask) {
  const [newTask, setNewTask] = useState<string>("");
  const handleAddTask = () => {
    dispatch({ type: "added", id: nextId++, text: newTask });
    setNewTask("")
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add Todo"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="button" onClick={handleAddTask}>
        Click
      </button>
    </div>
  );
}
