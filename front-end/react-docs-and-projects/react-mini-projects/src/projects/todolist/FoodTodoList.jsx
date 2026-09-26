import { useState } from "react";
import { foods } from "./foodData";

let nextId = 6;
export default function FoodTodoList() {
  const [input, setInput] = useState("");
  const [foodList, setFoodList] = useState(foods);

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      const newFoods = [
        {
          id: nextId++,
          food: input,
        },
      ];
      setFoodList([...foodList, newFoods]);
      setInput("");
    }
  };

  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        placeholder="Add food"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" onClick={handleAddTodo}>
        Add New Food
      </button>

      <ul>
        {foodList.map((item) => (
          <li key={item.id}>
            {item.food}
            <button type="button">Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
