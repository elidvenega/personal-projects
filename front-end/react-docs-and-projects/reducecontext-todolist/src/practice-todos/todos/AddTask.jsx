import { useState } from "react";
import { useDispatch } from "./TaskContextFunc";

let nextId = 3;
export default function AddTask() {
  const [input, setInput] = useState("");
  const handleInput = (e) => setInput(e.target.value);
  const addTask = useDispatch();
  const handleSubmit = () => {
    if (input.trim() !== "") {
      setInput("");
      addTask({
        type: "added",
        todo: input,
        id: nextId++,
      });
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Add Todo"
        value={input}
        onChange={handleInput}
      />
      <button type="button" onClick={handleSubmit}>
        Add
      </button>
    </>
  );
}
