import { useState } from "react";



const todoList = ['Walk 20 mins', 'Eat Dinner', 'Read Book', 'Create Schedule for meeting'];

export default function TodoPractice() {
    const [todoList, setTodos] = useState(todoList);
    const [input, setInput] = useState("");

  return (
  <>
  <ul>
    {
        todoList.map(() => (
            <li>

            </li>
        ))
    }
  </ul>
  </>
  )
}
