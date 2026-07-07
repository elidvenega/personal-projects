import { useState } from "react";
import { instrumentsArr } from "./instruments";
import "./styles.css";

export default function App() {
  const [category, setCategory] = useState("all");

  const filtered =
    category === "all"
      ? instrumentsArr
      : instrumentsArr.filter(
          (item) => item.category === category
        );

  return (
    <main>
      <h1>Student Instruments</h1>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="select-container "
      >
        <option value="all">All</option>
        <option value="woodwinds">Woodwinds</option>
        <option value="brass">Brass</option>
        <option value="percussion">Percussion</option>
      </select>

      <div className="product-container">
        {filtered.map((item) => (
          <div className="card" key={item.id}>
            <h2>{item.instrument}</h2>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}