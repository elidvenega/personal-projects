import { useState } from "react";

interface Task {
  id: number;
  text: string;
  done: boolean;
}

interface TaskListProps {
  task: Task[];
  dispatch: React.Dispatch<{
    type: "changed" | "delete";
    id?: number;
    task?: Task;
  }>;
}

export default function TaskList() {
  return <div>TaskList</div>;
}
