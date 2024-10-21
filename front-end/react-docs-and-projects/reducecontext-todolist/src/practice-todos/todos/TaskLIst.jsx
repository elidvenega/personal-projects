/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTasks, useDispatch } from "./TaskContextFunc";

function Task({ task }) {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  let taskContent;
  if (edit) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.todo}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                todo: e.target.value,
              },
            });
          }}
        />
        <button onClick={() => setEdit(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
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
