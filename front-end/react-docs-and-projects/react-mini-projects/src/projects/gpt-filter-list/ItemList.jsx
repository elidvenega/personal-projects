import { useState } from "react";
import "./itemlist.css";

export default function ItemList() {
  const [items, setItems] = useState("");
  return (
    <div className="container">
      <h2>Filter Items</h2>
      <input
        type="text"
        className="searchInput"
        value={items}
        placeholder="Search items..."
        onKeyUp={(e) => setItems(e.target.value)}
      />
      <ul className="itemList">
        <li>Apple</li>
        <li>Banana</li>
        <li>Cherry</li>
        <li>Grapes</li>
        <li>Orange</li>
        <li>Strawberry</li>
        <li>Pineapple</li>
      </ul>
    </div>
  );
}


// import React, { useState } from 'react';

// function FilterableList({ initialData }) {
//   const [data, setData] = useState(initialData);
//   const [filteredData, setFilteredData] = useState(initialData);
//   const [filterValue, setFilterValue] = useState('');

//   const handleFilterChange = (event) => {
//     const newValue = event.target.value;
//     setFilterValue(newValue);

//     const newFilteredData = data.filter(item =>
//       item.toLowerCase().includes(newValue.toLowerCase())
//     );
//     setFilteredData(newFilteredData);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Filter items..."
//         value={filterValue}
//         onChange={handleFilterChange}
//       />
//       <ul>
//         {filteredData.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default FilterableList;