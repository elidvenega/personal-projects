import { useState } from "react";
import { useDispatch } from "./ContextProvider";

let nextId = 3;
export default function AddTask() {
  const [todos, setTodos] = useState("");
  const newTask = useDispatch();

  const handleInput = (e) => setTodos(e.target.value);
  const handleSubmit = () => {
    if (todos.trim() !== "") {
      setTodos("");
      newTask({
        type: "added",
        todo: todos,
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
        value={todos}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={handleSubmit}>
        Add
      </button>
    </>
  );
}
