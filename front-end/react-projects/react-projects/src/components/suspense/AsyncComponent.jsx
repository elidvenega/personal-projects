// AsyncComponent.js
import { useState, useEffect } from "react";

// Meant to reproduce async data
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data loaded! Suspense Example");
    }, 2000);
  });
};

const AsyncComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((result) => {
      setData(result);
    });
  }, []);

  return <div>{data}</div>;
};

export default AsyncComponent;
