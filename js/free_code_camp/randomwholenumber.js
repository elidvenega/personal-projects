function randomRange(myMin, myMax) {
  // Only change code below this line
  const num = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  return num;
  // Only change code above this line
}

console.log(randomRange(10, 20));
