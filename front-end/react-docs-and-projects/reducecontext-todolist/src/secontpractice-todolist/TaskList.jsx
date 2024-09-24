/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTasks, useTasksDispatch } from "./TaskContextPovider";

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

function Task({ task }) {
  const [edit, setEdit] = useState(false);
  const dispatch = useTasksDispatch();
  let contentOutput;
  if (edit) {
    contentOutput = (
      <>
        <input
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
    contentOutput = (
      <>
        {task.todo}
        <button onClick={() => setEdit(true)}>Edit</button>
      </>
    );
  }
  return (
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

      {contentOutput}
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
  );
}
