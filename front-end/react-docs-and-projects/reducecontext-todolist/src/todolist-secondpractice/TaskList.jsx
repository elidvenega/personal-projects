/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTasks, useDispatch } from "./TaskContextProvider";

function Task({ task }) {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  let taskOutput;
  if (edit) {
    taskOutput = (
      <>
        <input
          value={task.todo}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                id: task.id,
                todo: e.target.value
              },
            });
          }}
        />
        <button onClick={() => setEdit(false)}>Save</button>
      </>
    );
  } else {
    taskOutput = (
      <>
        {task.todo}
        <button onClick={() => setEdit(true)}>Edit</button>
      </>
    );
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          value={task.done}
          onChange={(e) =>
            dispatch({
              type: "changed",
              task: {
                done: e.target.checked,
              },
            })
          }
        />
        {taskOutput}
        <button
          onClick={() => {
            dispatch({
              type: "delete",
              id: task.id,
            });
          }}
        >
          Delete
        </button>
      </label>
    </>
  );
}

export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
