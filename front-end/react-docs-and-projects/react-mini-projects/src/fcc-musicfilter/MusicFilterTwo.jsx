import { useState } from "react";
import { instrumentsArr } from "./instruments";

export default function MusicFilterTwo() {
  const [category, setCategory] = useState("all");

  const instrumentFilter =
    category === "all"
      ? instrumentsArr
      : instrumentsArr.filter((instrument) => instrument.category === category);

  const handleInput = (e) => setCategory(e.target.value);

  return (
    <main>
      <h1>Todo list</h1>
      <select value={category} onChange={handleInput}>
        <option value="all">All</option>
        <option value="woodwinds">Woodwinds</option>
        <option value="brass">Brass</option>
        <option value="percussion">Percussion</option>
      </select>

      {instrumentFilter.map((item) => (
        <div>
          <h2>{item.instrument}</h2>
          <p>{item.price}</p>
        </div>
      ))}
    </main>
  );
}
