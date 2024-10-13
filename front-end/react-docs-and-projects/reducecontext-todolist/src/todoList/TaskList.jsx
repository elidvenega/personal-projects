import { useState } from 'react';
import { useTasks, useDispatch } from './TaskContextProvider';


function Task({ task }) {
  const [edit, setEdit] = useState(false);
  const dispatch= useDispatch();
  let todos;

  if(edit) {
    todos = (
      <>
      
      
      </>
    )
  }
  return(

  )
}


export default function TaskList() {
  const tasks = useTasks();
  return (
  <ul>
    {
      tasks.map((task) => (
        <li key={task.id}>
          <Task task={task}/>
        </li>
      ))
    }
  </ul>
  )
}
