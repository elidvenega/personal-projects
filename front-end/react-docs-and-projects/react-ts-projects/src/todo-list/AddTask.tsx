import { useState } from "react";
import { useTasksDispatch } from "./TaskContext";

let nextId = 3;

interface TaskAction {
  type: "added";
  id: number;
  text: string;
}

const AddTask: React.FC = () => {
  const [task, setTask] = useState<string>(""); // Add type annotation for state

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };
  const addTask = useTasksDispatch();

  if (!addTask) {
    return <div>Error: Unable to add task</div>;
  }

  const handleAddTask = () => {
    setTask("");
    addTask({
      type: "added",
      id: nextId++,
      text: task,
    } as TaskAction); // Type assertion for the action
  };

  return (
    <>
      <input
        type="text"
        placeholder="Add Task"
        value={task}
        onChange={handleInputChange} // Updated function
      />
      <button type="button" onClick={handleAddTask}>
        Add
      </button>
    </>
  );
};

export default AddTask;
