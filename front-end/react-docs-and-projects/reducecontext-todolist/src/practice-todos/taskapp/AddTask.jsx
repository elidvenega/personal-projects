import { useState } from "react";
import { useDisptach } from "./ContextProvider";

let nextId = 4;
export default function AddTask() {
  const [value, setValue] = useState("");
  const addTask = useDisptach();

  const handleInput = (e) => setValue(e.target.value);

  const handleSubmit = () => {
    if (value.trim() !== "") {
      setValue("");
      addTask({
        type: "added",
        todo: value,
        id: nextId++,
      });
    }
  };

  return (
    <>
      <input
        type="text"
        value={value}
        placeholder="Add Todo"
        onChange={handleInput}
      />
      <button onClick={handleSubmit}>Add</button>
    </>
  );
}
