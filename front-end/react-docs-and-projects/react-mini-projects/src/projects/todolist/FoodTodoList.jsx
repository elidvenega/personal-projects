import { useState } from "react";
import { foods } from "./foodData";

export default function FoodTodoList() {
  const [input, setInput] = useState("");
  const [foodList, setFoodList] = useState(foods);

  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        placeholder="Add food"
        onChange={(e) => setInput(e.target.value)}
      />

      <ul>
        {foodList.map((item) => (
          <li key={item.id}>{item.food}</li>
        ))}
      </ul>
    </>
  );
}
