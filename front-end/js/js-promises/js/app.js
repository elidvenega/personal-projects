// 1. Creating the Promise
const fetchData = new Promise((resolve, reject) => {
  const success = true; // Simulating server status

  setTimeout(() => {
    if (success) {
      resolve("Data successfully downloaded!"); // Runs on success
    } else {
      reject("Error: Failed to fetch data.");   // Runs on failure
    }
  }, 2000); // Simulates a 2-second network delay
});

// 2. Consuming the Promise
fetchData
  .then((result) => {
    console.log(result); // Logs: "Data successfully downloaded!"
  })
  .catch((error) => {
    console.error(error); // Logs the error message if success was false
  })
  .finally(() => {
    console.log("Operation complete."); // Always runs at the very end
  });
