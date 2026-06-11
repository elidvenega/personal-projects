import { useState } from "react";
import { useDispatch } from "./TasksProvider";

let nextId = 4;
export default function AddTask() {
  const [inputValue, setInputValue] = useState("");
  const addtask = useDispatch();
  const handleInput = (e) => setInputValue(e.target.value);
  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      setInputValue("");
      addtask({
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
        placeholder="Add new task"
        value={inputValue}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      {/* <button
        type="submit"
        onClick={() => {
          if (inputValue.trim() !== "") {
            setInputValue("");
            addtask({
              type: "added",
              id: nextId++,
              todo: inputValue,
            });
          }
        }}
      >
        Add
      </button> */}
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </>
  );
}
