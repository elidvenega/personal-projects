import { useState } from "react";

interface AddTaskProps {
  dispatch: React.Dispatch<{
    type: "added";
    id: number;
    text: string;
  }>;
}

let nextId = 3;

<<<<<<< HEAD
export default function AddTask({ dispatch }: AddTaskProps) {
=======
function AddTask({ dispatch }: AddTaskProps) {
>>>>>>> d0bf7f018f343559b12918ea6844c5327b6ff165
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
      <button className="btn" onClick={handleAddTask}>
        Add
      </button>
    </>
  );
}
<<<<<<< HEAD
=======

export default AddTask;
>>>>>>> d0bf7f018f343559b12918ea6844c5327b6ff165
