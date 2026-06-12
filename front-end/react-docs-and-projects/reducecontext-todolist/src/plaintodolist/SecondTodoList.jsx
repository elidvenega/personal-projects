import { useState } from 'react';
import { todos } from "./data";

export default function SecondTodoList() {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState(todos);

    const handleInput = (e) => setInputValue(e.target.value);

    const handleSubmit = () => {

    }

  return (
    <>
    <h1>Todo List</h1>
    <form action="">
        <input 
        type="text" 
        placeholder="Add new todo"
        value={inputValue}
        onChange={handleInput}
        />
        <button>Add</button>
    </form>

    <ul>
        {
            todos.map((t) => (
                <li key={t.id}>
                     {t.todo}
                     <button onClick={}>Delete</button>
                </li>
            ))
        }
    </ul>
    
    </>
  )
}
