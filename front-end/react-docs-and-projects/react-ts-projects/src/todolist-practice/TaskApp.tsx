import { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

interface Task {
    id: number;
    text: string;
    done: boolean
}

interface TaskAction {
    type: "added" | "changed" | "delete";
    id?: number;
    text?: string;
    task?: Task
}

const todoList: Task[] = [
    {id: 0, text: "Go to work", done: false},
    {id: 1, text: "Read 15 mins", done: false},
    {id: 2, text: "Cook", done: false}
]

function reducer(tasks: Task[], action: TaskAction): Task[] {
       switch(action.type) {

       }
}


// function reducer(tasks: Task[], action: TaskAction): Task[] {
//     switch (action.type) {
//       case "added":
//         return [...tasks, { id: action.id!, text: action.text!, done: false }];
//       case "changed":
//         return tasks.map((t) => (t.id === action.task?.id ? action.task : t));
//       case "delete":
//         return tasks.filter((t) => t.id !== action.id);
//       default:
//         throw new Error("Unknown action: " + action.type);
//     }
//   }


export default function TaskApp() {
  return (
    <div>TaskApp</div>
  )
}
