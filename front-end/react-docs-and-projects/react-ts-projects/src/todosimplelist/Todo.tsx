import { SetStateAction, useState } from "react";
// import { todos } from "./todos";

interface Tasks {
  id: number;
  todo: string;
}

const todos: Tasks[] = [
  {
    id: 0,
    todo: "Walk 20 mins",
  },
  {
    id: 1,
    todo: "Practice Japanese",
  },
  {
    id: 2,
    todo: "Cook Dinner",
  },
  {
    id: 3,
    todo: "Read",
  },
  {
    id: 4,
    todo: "Wash Laundry",
  },
];

export default function Todo() {
  const [inputValue, setInputValue] = useState<string>("");
  const [task, setTask] = useState(todos);
  //  Look up setStateAction
  const handleInput = (e: { target: { value: SetStateAction<string> } }) =>
    setInputValue(e.target.value);

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      const newTask: Tasks = {
        id: task.length,
        todo: inputValue,
      };
      setInputValue("");
      setTask([...task, newTask]);
    }
  };

  const handleKeyDown = (e: { key: string; preventDefault: () => void }) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleDelete = (index: number) => {
    const newList = task.filter((t) => t.id !== index);
    setTask(newList);
  };

  return (
    <>
      <form action="">
        <h1>Todo List</h1>
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
      </form>
      <ul>
        {task.map((task) => (
          <li key={task.id}>
            {task.todo}
            <button type="submit" onClick={() => handleDelete(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
