import { useState } from 'react';

interface Task {
  id: number;
  text: string;
  done: boolean
}

interface TaskListProps {
  tasks: Task[];
  dispatch: React.Dispatch<{
    type: "changed" | "delete";
    id?: number;
    task?: Task;
  }>
}



export default function TaskList({ tasks, dispatch}: TaskListProps) {
  const [editingTaskId, setEditingTaskId] = useState<number | null >(null);
  const [newText, setNewText] = useState("");

  const handleDeleteTask = (taskId: number) {
    dispatch({ type: "delete", id: taskId})
  }

  const handleEditTask = (task: Task) => {
    setEditingTaskId(task.id);
    setNewText(task.text);
  }

const handleSaveTask = (taskId: number) => {
  dispatch({
    type: "changed",
    task: {id: taskId, text: newText, done: false}

  })
  setEditingTaskId(null)
}

  return (
    <div>TaskList</div>
  )
}
