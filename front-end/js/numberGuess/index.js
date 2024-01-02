"use strict";
// Improve the game a bit
function guessNumber() {
  let randomNum = Math.floor(Math.random() * 20);

  // output to the console for debugging
  console.log(randomNum);
  //   declare a variable
  let guess;
  guess = prompt("Please enter a number between and 20");
  console.log("Your guess is:" + guess);

  if (guess < randomNum) {
    window.alert("Your guess is too low");
  } else if (guess > randomNum) {
    window.alert("Your guess is too high");
  } else if (guess == randomNum) {
    window.alert("You guessed it. You Win!");
  } else {
    window.alert("Error");
  }
}

guessNumber();
