import { useState } from "react";
import { useDispatch } from "./ContextFunction";

let nextId = 5;
export default function AddTask() {
  const [inputValue, setInputValue] = useState("");
  const handleInput = (e) => setInputValue(e.target.value);
  const addTask = useDispatch();
  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      setInputValue("");
      addTask({
        type: "added",
        id: nextId++,
        todo: inputValue,
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
        value={inputValue}
        placeholder="Add Todo"
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit}>Add</button>
    </>
  );
}
