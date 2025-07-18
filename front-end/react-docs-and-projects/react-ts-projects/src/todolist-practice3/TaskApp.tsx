import { useReducer } from "react";

interface Task {
  id: number;
  text: string;
  done: boolean;
}


interface TaskAction {
  type: "added" | "changed"| "delete";
  id?: number;
  text?: string;
  task?: Task;

}

const taskList: Task[] = [
  {id: 0, text: "Work", done: false},
  {id: 1, text: "Exercise", done: false},
  {id: 2, text: "Cook Dinner", done: false}
]


function reducer() {

}


export default function TaskApp() {
  return <div>TaskApp</div>;
}
