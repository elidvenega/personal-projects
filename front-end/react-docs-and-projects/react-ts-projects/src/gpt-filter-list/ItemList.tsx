import { useState } from "react";
import { fruits } from "./fruits";
import "./itemlist.css";

export default function ItemList() {
  const [itemSearch, setItemSearch] = useState<string>("");

  const filteredItems = fruits.filter((item) =>
    item.fruit.toLowerCase().includes(itemSearch.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Filter Items</h2>
      <input
        type="text"
        className="searchInput"
        value={itemSearch}
        placeholder="Search items..."
        onChange={(e) => setItemSearch(e.target.value)}
      />
      <ul className="itemList">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <li key={item.id}> {item.fruit}</li>)
        ) : (
          <li>Nothing Found</li>
        )}
      </ul>
    </div>
  );
}
