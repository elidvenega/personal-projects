// // 1. Creating the Promise
// const fetchData = new Promise((resolve, reject) => {
//   const success = true; // Simulating server status

//   setTimeout(() => {
//     if (success) {
//       resolve("Data successfully downloaded!"); // Runs on success
//     } else {
//       reject("Error: Failed to fetch data.");   // Runs on failure
//     }
//   }, 2000); // Simulates a 2-second network delay
// });

// // 2. Consuming the Promise
// fetchData
//   .then((result) => {
//     console.log(result); // Logs: "Data successfully downloaded!"
//   })
//   .catch((error) => {
//     console.error(error); // Logs the error message if success was false
//   })
//   .finally(() => {
//     console.log("Operation complete."); // Always runs at the very end
//   });

// Clause Example
// Simulate fetching a user from a database (takes 1 second)
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: "Alice" });
      } else {
        reject(new Error("Invalid user ID"));
      }
    }, 1000);
  });
}

// --- Using .then/.catch ---
fetchUser(1)
  .then((user) => console.log("Got user:", user))
  .catch((err) => console.error("Error:", err.message));

// --- Using async/await (same thing, cleaner) ---
// async function loadUser() {
//   try {
//     const user = await fetchUser(1);
//     console.log("Got user:", user);
//   } catch (err) {
//     console.error("Error:", err.message);
//   }
// }

// loadUser();

// --- Try it failing ---
// fetchUser(-1).catch((err) => console.error("This one fails:", err.message));

// My attempt

function testPromise(id) {
  return new Promise((resolve, reject) => {
    if (id > 2) {
      resolve(3 + 3);
    } else {
      reject(new Error("It failed"));
    }
  });
}

testPromise(1)
  .then((data) => console.log("Great", data))
  .catch((err) => console.log("Something went wrong ", err.message));



