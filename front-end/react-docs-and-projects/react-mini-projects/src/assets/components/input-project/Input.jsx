import { useState } from "react";

export default function Input() {
  const [name, setName] = useState("");

  const handleName = (e) => setName(e.target.value);
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <input
        type="text"
        value={name}
        onChange={handleName}
        placeholder="Name"
      />
      <p>Hello my name is {name}</p>
    </div>
  );
}
