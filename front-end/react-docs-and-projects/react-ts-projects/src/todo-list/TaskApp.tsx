import { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./todolist.css";

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
  { id: 0, text: "Go to work", done: false },
  { id: 1, text: "Read 15 mins", done: false },
  { id: 2, text: "Exercise 30 mins", done: false },
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
      throw new Error("Unknown action: " + action.type);
  }
}

<<<<<<< HEAD
export default function TaskApp() {
=======
function TaskApp() {
>>>>>>> d0bf7f018f343559b12918ea6844c5327b6ff165
  const [tasks, dispatch] = useReducer(reducer, todoList);

  return (
    <div className="container">
      <h1>Todo List</h1>
      <AddTask dispatch={dispatch} />
      <TaskList tasks={tasks} dispatch={dispatch} />
    </div>
  );
}
<<<<<<< HEAD
=======

export default TaskApp;
>>>>>>> d0bf7f018f343559b12918ea6844c5327b6ff165
