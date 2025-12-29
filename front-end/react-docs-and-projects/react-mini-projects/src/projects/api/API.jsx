import { useState, useEffect } from "react";

export default function API() {
  const [api, setApi] = useState([]);

  async function fetchApi() {
    try {
      const resp = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await resp.json();
      setApi(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <ul>
        {api.map((users) => (
          <li key={users.id}>{users.name}</li>
        ))}
      </ul>
    </>
  );
}
