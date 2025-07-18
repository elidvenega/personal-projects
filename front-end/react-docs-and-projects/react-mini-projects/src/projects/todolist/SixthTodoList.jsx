import { useState } from "react";
import { data } from "./data";

let nextTodo = 5;
export default function SixthTodoList() {
  const [input, setInput] = useState("");
  const [todolist, setTodoList] = useState(data);

  const handleAddTodo = () => {
    if (input.trim() === "") return;
    const newTodos = {
      id: nextTodo++,
      task: input,
    };

    setTodoList([...todolist, newTodos]);
    setInput("");
  };

  const handleDelete = (id) => {
    const newList = todolist.filter((todo) => todo.id !== id);
    setTodoList(newList);
  };

  return (
    <div>
      <form action="">
        <h1>Todo List</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            e.preventDefault();
            setInput(e.target.value);
          }}
          placeholder="Add todo"
        />
        <button type="button" onClick={handleAddTodo}>
          Add
        </button>
      </form>
      <ul>
        {todolist.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      div+p_ul
    </div>
  );
}
