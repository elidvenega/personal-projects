import { useState } from "react";

const todoList = [
  { id: 0, task: "Work" },
  { id: 1, task: "Eat" },
  { id: 2, task: "Walk 30 mins" },
  { id: 3, task: "Guitar Practice" },
];

export default function Example() {
  const [todo, setTodo] = useState(todoList);

  // const handleDelete = (id) => {
  //   const newList = todo.filter((t) => t.id !== id);
  //   setTodo(newList);
  // };

  return (
    <div>
      <ul>
        {
          todo.map((todos) => (
            <li key={todos.id}>
              {todos.task}
              <button onClick={() => setTodo(todo.filter((a) => a.id !== todos.id ))}>Delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
