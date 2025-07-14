import { useState } from 'react';
import { data } from './data';

export default function SixthTodoList() {
    const [input, setInput] = useState("");
    const [todolist, setTodoList] = useState(data)

    
  return (
    <div>
        <form action="">
            <input 
            type="text"
            value={input} 
            
            />
            <button>Add</button>
        </form>

        <ul>
            {

            }
        </ul>
    </div>
  )
}
