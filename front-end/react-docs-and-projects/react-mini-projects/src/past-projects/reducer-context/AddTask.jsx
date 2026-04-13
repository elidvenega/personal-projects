import { useState } from "react";
import { useTasksDispatch } from "./TasksContext.jsx";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if(e.key === "Enter") {
            e.preventDefault()
            dispatch({
              type: "added",
              id: nextId++,
              text: text,
            });
          }
        }}
      />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </>
  );
}

let nextId = 3;
