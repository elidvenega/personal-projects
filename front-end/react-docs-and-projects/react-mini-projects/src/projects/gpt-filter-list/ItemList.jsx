import { useState } from "react";
import { fruits } from "./fruits";
import "./itemlist.css";

export default function ItemList() {
  const [itemSearch, setItemSearch] = useState("");

  const filteredItems = fruits.filter((item) =>
    item.fruit.toLowerCase().includes(itemSearch.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Filter Items</h2>
      <input
        type="text"
        className="searchInput"
        value={items}
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

// const todoList = [
//   { id: 0, task: "Work" },
//   { id: 1, task: "Eat" },
//   { id: 2, task: "Walk 30 mins" },
//   { id: 3, task: "Guitar Practice" },
// ];

// export default function ItemList() {
//   const [input, setInput] = useState("");
//   const [fruitList, setFruits] = useState(todoList);

//   // const handleDelete = (index) => {
//   //   const newList = [...fruitList];
//   //   newList.splice(index, 1);
//   //   setFruits(newList);
//   // };
//   return (
//     <>
//       <h1>Todo List</h1>
//       <form>
//         <input
//           type="text"
//           placeholder="Add Todo"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button
//           type="button"
//           onClick={() => {
//             setInput("");
//             setFruits([...fruits, input]);
//           }}
//         >
//           Add
//         </button>
//       </form>

//       <ul>
//         {fruitList.map((item) => (
//           <li key={item.id}>
//             {item.task}
//             <button
//               onClick={() => {
//                 const filter = fruitList.filter(
//                   (fruit) => fruit.id !== item.id
//                 );
//                 setFruits(filter);
//               }}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
