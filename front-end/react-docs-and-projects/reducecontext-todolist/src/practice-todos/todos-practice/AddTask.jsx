import { useState } from "react";
import { useDispatch } from "./ContextProvider";

let nextId = 3;
export default function AddTask() {
  const [todo, setTodo] = useState("");
  const newTask = useDispatch();
  const handleInput = (e) => setTodo(e.target.value);
  const handleSubmit = () => {
    if (todo.trim() !== "") {
      setTodo("");
      newTask({
        type: "added",
        todo: todo,
        id: nextId++,
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Add Todo"
        value={todo}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={handleSubmit}>
        Add
      </button>
    </>
  );
}
