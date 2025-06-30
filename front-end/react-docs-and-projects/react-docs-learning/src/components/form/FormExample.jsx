import { useState } from "react";
import './form.css';

const personInfo = {
  firstName: "Luis",
  lastName: "Mora",
  email: "luismora@gmail.com",
};

export default function () {
  const [person, setPerson] = useState(personInfo);

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <h1>Form Project</h1>
      <label>
        <input
          type="text"
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="text"
          name="lastName"
          value={person.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="text"
          name="email"
          value={person.email}
          onChange={handleChange}
        />
      </label>

      <p>
        The person's name is {person.firstName} and last name is{" "}
        {person.lastName} and email is {person.email}
      </p>
    </div>
  );
}
