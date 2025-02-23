import { useState } from "react";

interface Task {
  id: number;
  text: string;
  done: boolean;
}

interface TaskListProps {
  tasks: Task[];
  dispatch: React.Dispatch<{
    type: "changed" | "delete";
    id?: number;
    task?: Task;
  }>;
}

function TaskList({ tasks, dispatch }: TaskListProps) {
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [newText, setNewText] = useState("");

  const handleToggleTask = (task: Task) =>
    dispatch({ type: "changed", task: { ...task, done: !task.done } });

  const handleDeleteTask = (taskId: number) =>
    dispatch({ type: "delete", id: taskId });

  const handleEditTask = (task: Task) => {
    setEditingTaskId(task.id);
    setNewText(task.text);
  };

  const handleSaveTask = (taskId: number) => {
    dispatch({
      type: "changed",
      task: { id: taskId, text: newText, done: false },
    });
    setEditingTaskId(null);
  };

  const handleCancelEdit = () => setEditingTaskId(null);

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
}

export default TaskList;
