import { useState } from "react";
import { useDispatch } from "./TaskContextProvider";

let nextId = 4;
export default function AddTask() {
  const [todo, setTodo] = useState("");
  const newTask = useDispatch();
  const handleInput = (e) => setTodo(e.target.value);
  // const handleKeyDown = (e) => {
  //     if(e.key ===)
  // }
  return (
    <>
      <input
        type="text"
        placeholder="Add Todo"
        value={todo}
        onChange={handleInput}
      />
      <button
        onClick={() => {
          setTodo("");
          newTask({
            type: "added",
            id: nextId++,
            todo: todo
          });
        }}
      >
        Add
      </button>
    </>
  );
}
