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

export default function TaskList({ tasks, dispatch }: TaskListProps) {
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [newText, setNewText] = useState("");

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
          {editingTaskId === task.id ? (
            <>
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
              <div className="btn-container">
                <button onClick={() => handleSaveTask(task.id)}>save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </div>
            </>
          ) : (
            <>
              {task.text}
              <div>
                <button onClick={() => handleEditTask(task)}>Edit</button>
                <button onClick={() => handleDeleteTask(task.id)}>
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
