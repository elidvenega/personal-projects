import { useTasks, useTasksDispatch } from "./taskHooks";
import { useState } from "react";

interface Task {
  id: number;
  text: string;
  done: boolean;
}

const TaskList: React.FC = () => {
  const tasks = useTasks();
  const dispatch = useTasksDispatch();

  // State to track the task being edited and the new text
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [newText, setNewText] = useState<string>("");

  if (!tasks || !dispatch) {
    return <div>No tasks available</div>;
  }

  const handleToggleTask = (task: Task) => {
    dispatch({
      type: "changed",
      task: { ...task, done: !task.done },
    });
  };

  const handleDeleteTask = (taskId: number) => {
    dispatch({ type: "delete", id: taskId });
  };

  const handleEditTask = (task: Task) => {
    setEditingTaskId(task.id); // Set the task to be edited
    setNewText(task.text); // Set the current text in the input
  };

  const handleSaveTask = (taskId: number) => {
    dispatch({
      type: "changed",
      task: { id: taskId, text: newText, done: false }, // Update with the new text
    });
    setEditingTaskId(null); // Exit edit mode
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null); // Cancel edit mode
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => handleToggleTask(task)}
          />
          {editingTaskId === task.id ? (
            <>
              {/* Show input field if task is in edit mode */}
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
              <button className="btn" onClick={() => handleSaveTask(task.id)}>
                Save
              </button>
              <button className="btn" onClick={handleCancelEdit}>
                Cancel
              </button>
            </>
          ) : (
            <>
              {/* Show task text if not in edit mode */}
              {task.text}
              <button className="btn" onClick={() => handleEditTask(task)}>
                Edit
              </button>
            </>
          )}
          <button className="del-btn" onClick={() => handleDeleteTask(task.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
