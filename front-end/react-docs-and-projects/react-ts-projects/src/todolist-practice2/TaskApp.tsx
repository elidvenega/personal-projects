import { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

interface Task {
  id: number;
  text: string;
  done: boolean;
}

interface TasksAction {
type: "added" | "changed"| "delete";
id?: number;
text?: string;
task?: Task;

}

const todos: Task[] = [
  { id: 0, text: "Study React", done: false },
  { id: 1, text: "Study TypeScript", done: false },
  { id: 2, text: "Study Redux", done: false },
];

function reducer(tasks:Task[], action: TasksAction): Task[] {
  switch(action.type) {
    case "added": 
    return [...tasks, {id: action.id!, text: action.text!, done: false }]
    case "changed":
      return tasks.map((t) => t.id  === action.task?.id ? action.task : t);
      case "delete":
        return tasks.filter((t) => t.id !== action.id);
        default:
        throw new Error("Unknown action type" + action.type);
  }
}


export default function TaskApp() {
  const [tasks, dispatch] = useReducer(reducer, todos);
  return(
    <>
    <h1>Todo List</h1>
      <AddTask dispatch = {dispatch} />
      <TaskList tasks= {tasks}  dispatch = {dispatch}/>
    </>
  );
}
