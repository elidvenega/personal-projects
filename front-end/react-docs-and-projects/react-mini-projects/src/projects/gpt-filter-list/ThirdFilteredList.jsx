import { useState } from "react";
import { fruits } from "./fruits";
import "./itemlist.css";

// A div with class container
// An input with a class searchInput
//  A ul with a class itemList

export default function ThirdFilteredList() {
  const [fruitSearch, setFruitSearch] = useState("");

  const filteredList = fruits.filter((item) =>
    item.fruit.toLowerCase().includes(fruitSearch.toLowerCase()),
  );
  return (
    <div className="container">
      <h1>Fruit List</h1>
      <input
        className="searchInput"
        value={fruitSearch}
        onChange={(e) => setFruitSearch(e.target.value)}
        type="text"
      />
      <ul>
        {filteredList.length > 0 ? (
          filteredList.map((item) => <li key={item.id}>{item.fruit}</li>)
        ) : (
          <li>Nothing Found</li>
        )}
      </ul>
    </div>
  );
}
