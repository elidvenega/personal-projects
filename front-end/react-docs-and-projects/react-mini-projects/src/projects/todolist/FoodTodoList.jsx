import { useState } from 'react';
import {foods} from "./foodData.js";
import { li } from 'framer-motion/client';

export default function FoodTodoList() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(foods);

  return (
    <div>
        <h1>Food List</h1>
        <input type="text" />
        <ul>
            {
              foods.map((food) => (
                <li>
                    
                </li>
              ))
            }
        </ul>
    </div>
  )
}
