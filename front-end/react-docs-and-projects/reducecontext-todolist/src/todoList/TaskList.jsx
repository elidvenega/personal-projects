/* eslint-disable react/prop-types */

import { useState } from "react";
import { useTasks, useTasksDispatch } from "./TaskContextProvider";

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
  let taskContent;
  if (edit) {
    taskContent = (
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
    taskContent = (
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
        checked={task.completed}
        onChange={(e) => {
          dispatch({
            type: "changed",
            task: {
              ...task,
              completed: e.target.checked,
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
  );
}
