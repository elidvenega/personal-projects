/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTasks, useDisptach } from "./ContextProvider";

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDisptach();
  let taskContent;

  if (isEditing) {
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
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.todo}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={task.done}
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
          onClick={() =>
            dispatch({
              type: "delete",
              id: task.id,
            })
          }
        >
          Delete
        </button>
      </label>
    </>
  );
}

export default function TasksList() {
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
