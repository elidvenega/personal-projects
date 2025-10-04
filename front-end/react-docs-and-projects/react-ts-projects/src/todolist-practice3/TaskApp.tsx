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

const taskList: Task[] = [
  { id: 0, text: "Work", done: false },
  { id: 1, text: "Exercise", done: false },
  { id: 2, text: "Cook Dinner", done: false },
];

function reducer(tasks: Task[], action: TaskAction[]): Task[] {}

export default function TaskApp() {
  const[tasks, dispatch] = useReducer(reducer, todos);
  return (
    <>
    <h1>Todo List</h1>
    <AddTask  dispatch={dispatch}/>
    <TaskList tasks={tasks} dispatch={dispatch}/>
    </>
  )
}
