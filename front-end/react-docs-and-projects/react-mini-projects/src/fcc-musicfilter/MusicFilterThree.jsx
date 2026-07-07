import { useState } from "react";
import { instrumentsArr } from "./instruments";

export default function MusicFilterThree() {
  const [category, setCategory] = useState("all");

  const filteredList =
    category === "all"
      ? instrumentsArr
      : instrumentsArr.filter((inst) => inst.category === category);

  return (
    <main>
        <h1>Instrument List</h1>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="woodwinds">Woodwinds</option>
        <option value="brass">Brass</option>
        <option value="percussion">Percussion</option>
      </select>
      {filteredList.map((item) => (
        <div key={item.id}>
          <h2>{item.instrument}</h2>
          <p>${item.price}</p>
        </div>
      ))}
    </main>
  );
}
