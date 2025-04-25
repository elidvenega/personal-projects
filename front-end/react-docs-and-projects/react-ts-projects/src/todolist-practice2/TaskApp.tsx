import { useReducer } from 'react';


interface Todos {
    id: number;
    todo: string;
    done: boolean
}


const todos = [
    { id: 0, todo: "Study React", done: false },
    { id: 1, todo: "Study TypeScript", done: false },
    {id: 2, todo: "Study Redux", done: false },
]


function reducer(tasks, action) {

}
export default function TaskApp() {
    const[tasks, dispatch] = useReducer(reducer, todos)
  return (
    <div>TaskApp</div>
  )
}
