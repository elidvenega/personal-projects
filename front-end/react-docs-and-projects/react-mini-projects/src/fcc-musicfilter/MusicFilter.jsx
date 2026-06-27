import React, { useState } from "react";
import { instrumentsArr } from "./instruments";
import "./styles.css";

export default function MusicFilter() {
  const [currentCategory, setCurrentCategory] = useState(instrumentsArr[0].id);

  const selectedUser = instrumentsArr.find((user) => user.id === currentCategory);

  const handleCategoryChange = (e) => setCurrentCategory(e.target.value);

  return (
    <>
      <main>
        <h1>Student Instruments</h1>
        <select
          className="select-container"
          value={currentCategory}
          onChange={handleCategoryChange}
        >
          {instrumentsArr.map((instrument) => (
            <option key={instrument.id} value={instrument.id}>
              {instrument.category}
            </option>
          ))}
        </select>

        <div className="product-container">
          {selectedUser && (
            <div className="card">
              <h2>{selectedUser.instrument}</h2>
              <p>{selectedUser.price}</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
