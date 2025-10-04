let practicePromise = new Promise((resolve, reject) => {
  if (1 === 1) {
    resolve("Success");
  } else {
    reject("Failure");
  }
});

practicePromise
  .then((message) => {
    console.log(message);
  })
  .catch((failure) => {
    console.log(failure);
  });
