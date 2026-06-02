import { useState } from "react";
import { useTasks, useDispatch } from "../ContextFunction";

export default function TaskList() {
  const tasks = useTasks();
  return (
    // <ul>
    //   {tasks.map((task) => (
    //     <li key={task.id}>
    //       <Task task={task} />
    //     </li>
    //   ))}
    // </ul>
    <></>
  );
}

function Task({ task }) {}
