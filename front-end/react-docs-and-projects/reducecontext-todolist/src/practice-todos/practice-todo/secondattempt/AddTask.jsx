import { useState } from "react";
import { useDispatch } from "./TasksProvider";

let nextId = 5;
export default function AddTask() {
  const [inputValue, setInputValue] = useState("");
  const addTask = useDispatch();

  const handleInput = (e) => setInputValue(e.target.value);

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      addTask({
        type: "added",
        id: nextId++,
        todo: inputValue,
      });
      setInputValue("");
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
        placeholder="Add todo"
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
