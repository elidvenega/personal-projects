import { useState } from "react";
import { useDispatch } from "./ContextFunction";

let nextId = 4;
export default function AddTask() {
  const [inputValue, setInputValue] = useState("");
  const addTask = useDispatch();
  const handleInput = (e) => setInputValue(e.target.value);
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
        placeholder="Add Todo"
        value={inputValue}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={handleSubmit}>
        Add
      </button>
    </>
  );
}
