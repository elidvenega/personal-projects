import { useState, useEffect } from "react";

const DataFetchingComponent = () => {
  const [data, setData] = useState(null);

  // The useEffect hook is used to perform side effects in functional components.
  useEffect(() => {
    // Inside useEffect, you can perform asynchronous operations, data fetching, or any side effects.

    const fetchData = async () => {
      try {
        // Simulating a data fetching operation
        const response = await fetch("https://api.example.com/data");
        const result = await response.json();

        // Update the state with the fetched data
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // Cleanup function (optional): This function is called when the component is unmounted or when the dependencies change.
    return () => {
      // Perform cleanup if needed (e.g., cancel subscriptions, clear timers)
    };

    // Dependency array: List any variables that useEffect depends on.
    // If the dependency array is empty, the effect runs once after the initial render.
  }, []);

  return <div>{data ? <p>Data: {data}</p> : <p>Loading...</p>}</div>;
};

export default DataFetchingComponent;
