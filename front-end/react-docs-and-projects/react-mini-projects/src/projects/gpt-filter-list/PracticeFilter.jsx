import { useState } from "react";
import { fruits } from "./fruits";

export default function PracticeFilter() {
  const [fruitSearch, setFruitSearch] = useState("");

  const filteredItems = fruits.filter((item) =>
    item.fruit.toLowerCase().includes(fruitSearch)
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={fruitSearch}
        onChange={(e) => setFruitSearch(e.target.value)}
      />
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => <li key={item.id}>{item.fruit}</li>)
      ) : (
        <li>Nothing</li>
      )}
    </div>
  );
}
