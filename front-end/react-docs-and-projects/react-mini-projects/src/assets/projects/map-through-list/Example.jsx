import { useState } from "react";

const todoList = [
  { id: 0, task: "Work" },
  { id: 1, task: "Eat" },
  { id: 2, task: "Walk 30 mins" },
  { id: 3, task: "Guitar Practice" },
];

export default function Example() {
  const [todo, setTodo] = useState(todoList);

   const handleDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id))
   }

  return (
    <div>
      <ul>
        {todo.map((todos) => (
          <li key={todos.id}>
            {todos.task}
            <button type="button" onClick={() => handleDelete(todos.id)}>Delete</button>
            </li>
          
        ))}
      </ul>
    </div>
  );
}
