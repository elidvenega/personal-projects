import { useReducer } from "react";

interface Todos {
  id: number;
  text: string;
  done: boolean;
}

interface ReducerFunc {
type: "added" | "changed"| "delete";

}

const todos: Todos[] = [
  { id: 0, text: "Study React", done: false },
  { id: 1, text: "Study TypeScript", done: false },
  { id: 2, text: "Study Redux", done: false },
];

function reducer(tasks:Todos[], action) {}
export default function TaskApp() {
  const [tasks, dispatch] = useReducer(reducer, todos);
  return(
    <>
    <h1>Todo List</h1>

    </>
  );
}
