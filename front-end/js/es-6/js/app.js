"use strict";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
  }
}

const person1 = new Person("Alice", 23);
const person2 = new Person("Bob", 20);
const person3 = new Person("Mike", 29)

console.log(person2);
