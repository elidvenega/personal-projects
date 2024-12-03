/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTasks, useDispatch } from "./TaskContextProvider";

export default function TaskLIst() {
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

function Task({ task }) {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  let taskContent;
  if (edit) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.task}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                task: e.target.value,
              },
            });
          }}
        />
        <button type="button" onClick={() => setEdit(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.task}

        <button type="button" onClick={() => setEdit(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <>
      <label>
        <input
          type="checkbox"
          value={task.done}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                done: e.target.checked,
              },
            });
          }}
        />
        {taskContent}
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "delete",
              id: task.id,
            })
          }
        >Delete</button>
      </label>
    </>
  );
}
