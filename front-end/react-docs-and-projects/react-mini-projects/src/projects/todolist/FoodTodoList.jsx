import { useState } from "react";
import { foods } from "./foodData";

let foodId = 6;
export default function FoodTodoList() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(foods);

  const handleAddFood = () => {
    if (input.value !== "") {
      const newFood = {
        id: ++foodId,
        food: input,
      };

      setData([...data, newFood]);
      setInput("");
    }
  };

  const handleDelete = (listItem) => {
    const newTodoList = data.filter((item) => item.id !== listItem);
    setData(newTodoList);
  };

  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      handleAddFood();
    }
  };

  return (
    <div>
      <h1>Food List</h1>
      <input
        type="text"
        placeholder="Add food"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyEnter}
        value={input}
      />
      <button type="button" onClick={handleAddFood}>
        Add
      </button>

      <ul>
        {data.map((food) => (
          <li key={food.id}>
            {food.food}
            <button onClick={() => handleDelete(food.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
