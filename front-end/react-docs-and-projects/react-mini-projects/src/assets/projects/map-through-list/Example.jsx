import { useState } from "react";

const todoList = [
  { id: 0, task: "Work" },
  { id: 1, task: "Eat" },
  { id: 2, task: "Walk 30 mins" },
  { id: 3, task: "Guitar Practice" },
];

// const todoList = ["Eat", "Work Out", "Walk", "Make bread"];

export default function Example() {
  const [todos, setTodos] = useState(todoList);

  // const handleDelete = (id) => {
  //   const newList = todo.filter((t) => t.id !== id);
  //   setTodo(newList);
  // };

  // const handleDelete = (index) => {
  //   const newList = todos.filter((_, i) => i !== index);
  //   setTodos(newList);
  // }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button
              type="button"
              onClick={() =>
                setTodos(todos.filter((taskList) => taskList.id !== todo.id))
              }
            >
              Delete
            </button>
            {/* <button onClick={ () => handleDelete(index)}>Delete</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
