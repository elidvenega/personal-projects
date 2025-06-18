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
  return (
    <div>TaskList</div>
  )
}
