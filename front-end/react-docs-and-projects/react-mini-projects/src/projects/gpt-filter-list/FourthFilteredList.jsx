import React, { useState } from "react";
import { fruits } from "./fruits.js";
import "./itemlist.css";
// A div with class container
// An input with a class searchInput
//  A ul with a class itemList

export default function FourthFilteredList() {
  const [fruitSearch, setFruitSearch] = useState("");
  const filteredList = fruits.filter((item) =>
    item.fruit.toLowerCase().includes(fruitSearch.toLowerCase()),
  );

  return (
    <div className="container">
      <h2>Filtered List</h2>
      <input
        className="searchInput"
        type="text"
        value={fruitSearch}
        onChange={(e) => setFruitSearch(e.target.value)}
      />
      <ul className="itemList">
        {filteredList.length > 0 ? (
          filteredList.map((item) => <li key={item.id}>{item.fruit}</li>)
        ) : (
          <li>Nothing Found</li>
        )}
      </ul>
    </div>
  );
}
