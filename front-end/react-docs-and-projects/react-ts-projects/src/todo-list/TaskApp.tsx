import { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./todolist.css"

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

const todoList: Task[] = [
  { id: 0, text: "Clean House", done: false },
  { id: 1, text: "Move Furniture", done: false },
  { id: 2, text: "Wax Car", done: false },
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
  const [tasks, dispatch] = useReducer(reducer, todoList);
  return (
    <div className="container">
      <h1>Todo List</h1>
      <AddTask dispatch={dispatch} />
      <TaskList tasks={tasks} dispatch={dispatch} />
    </div>
  );
}
