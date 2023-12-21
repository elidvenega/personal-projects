// IIFE
(function (name, food, pet) {
  const greet = "Hi";
  console.log(`${greet} how are you ${name}?`);
  console.log(`${greet} what is your favorite ${food}.`);
  console.log(`${greet} how is your${pet}.`);
})("John", "Pizza", "Dog");
