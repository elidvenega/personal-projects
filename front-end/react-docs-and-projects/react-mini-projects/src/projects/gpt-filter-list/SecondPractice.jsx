import { useState } from "react";
import { fruits } from "./fruits";

export default function SecondPractice() {
  const [searchItem, setSearchItem] = useState("");

  const filteredList = fruits.filter((item) =>
    item.fruit.toLocaleLowerCase().includes(searchItem)
  );

  return (
    <>
      <h1>Filter List</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />

      <ul>
        {filteredList.length > 0 ? (
          filteredList.map((item) => <li key={item.id}>{item.fruit}</li>)
        ) : (
          <li>Nothing Found</li>
        )}
      </ul>
    </>
  );
}
