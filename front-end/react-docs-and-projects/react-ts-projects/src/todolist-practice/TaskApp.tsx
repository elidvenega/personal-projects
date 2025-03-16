import { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

interface Task {
  id: number;
  text: string;
  done: boolean;
}

interface TaskAction {
  type: "added" | "changed" | "delete";
  id?: number;
  text?: string;
  task?: Task;
}

const todos: Task[] = [
  { id: 0, text: "Walk 20 mins", done: false },
  { id: 1, text: "Buy groceries", done: false },
  { id: 2, text: "Cook Dinner", done: false },
];

function reducer(tasks: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case "added":
      return [...tasks, { id: action.id!, text: action.text!, done: false }];
    case "changed":
      return tasks.map((t) => (t.id === action.task?.id ? action.task : t));
    case "delete":
      return tasks.filter((t) => t.id !== action.id);
    default:
      throw Error("Unknown Action" + action.type);
  }
}

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(reducer, todos);
  return (
    <div>
      <h1>Todo List</h1>
      <AddTask dispatch={dispatch} />
      <TaskList dispatch={dispatch} tasks={tasks} />
    </div>
  );
}
