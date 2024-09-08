import { useState, useEffect, SetStateAction } from "react";
import "./liststyles.css";

// classes being used
/* 
container
btn 
del-btn
*/

const dailyTodos = ["Shit", "Eat", "Walk", "Read"];

export default function TodoList() {
  // @ts-expect-error getting errors
  const storedTodos = JSON.parse(localStorage.getItem("todos")) || dailyTodos;
  const [todoList, setTodoList] = useState(storedTodos);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e: { target: { value: SetStateAction<string> } }) =>
    setInputValue(e.target.value);

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      const newTodoList = [...todoList, inputValue];
      setTodoList(newTodoList);
      setInputValue("");
      localStorage.setItem("todos", JSON.stringify(newTodoList));
    }
  };

  const handleDelete = (index: number) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
    localStorage.setItem("todos", JSON.stringify(newList));
  };

  const handleKeyDown = (e: { key: string; preventDefault: () => void }) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    // @ts-expect-error getting errors
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodoList(savedTodos);
    }
  }, []);
  return (
    <div className="container">
      <h1>Todo List</h1>
      <form action="">
        <input
          type="text"
          placeholder="Add Todo"
          value={inputValue}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
        <button type="button" className="btn" onClick={handleSubmit}>
          Add Todo
        </button>
      </form>
      <ul>
        {todoList.map((text: string | number | boolean, index: number) => (
          <li key={index}>
            {text}
            <button
              type="button"
              className="del-btn"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
