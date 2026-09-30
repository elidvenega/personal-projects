import { useState } from "react";
import { foods } from "./foodData";

export default function FoodTodoList() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(foods);

  return (
    <div>
      <h1>Food List</h1>
      <input type="text" />
      <button type="button">Add</button>

      <ul>
        {data.map((food) => (
          <li id="food.d">{food.food}</li>
        ))}
      </ul>
    </div>
  );
}
