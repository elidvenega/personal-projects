"use strict";

// Goal of project is to get the root number
// Figure out how to get root number

// console.log(rootSum(25));

// const answer = document.querySelector('#submit').innerHTML = rootSum();

// document.querySelector('#text').innerHTML = answer;

// one solution
// var input = parseInt(prompt("Enter a number:"));
// var result = Math.sqrt(input)

const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    // const rootSum = function (number) {
    //     return Math.sqrt(number)
    // }
    const input = document.querySelector("#text").innerHTML = Math.sqrt();
    document.querySelector("#output").innerHTML = input;

    // output.innerHTML = input;

})