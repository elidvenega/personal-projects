import React, { useState } from "react";
import { fruits } from "./fruits";
import "./itemlist.css";

// A div with class container
// An input with a class searchInput
//  A ul with a class itemList

export default function FourthFilteredList() {
  const [search, setSearch] = useState("");

  const filteredList = fruits.filter((item) =>
    item.fruit.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="container">
      <h1>Filtered List</h1>
      <input
        type="text"
        className="searchInput"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
