import { useState } from "react";
import { fruits } from "./fruits";
import "./itemlist.css";

// A div with class container
// An input with a class searchInput
//  A ul with a class itemList

export default function ThirdFilteredList() {
  const [search, setSearch] = useState("");

  const filteredList = fruits.filter((item) => item.fruit.toLowerCase().includes(search))
  
  return (
    <div className="container">
      <h2>Filtered List</h2>
      <input
        type="text"
        className="searchInput"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
