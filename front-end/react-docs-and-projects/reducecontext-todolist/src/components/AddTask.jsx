import { useState } from "react";
import { useTasksDispatch } from "./TaskContext.jsx";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();
  return (
    <>
      <input
        placeholder="Add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            setText("")
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
