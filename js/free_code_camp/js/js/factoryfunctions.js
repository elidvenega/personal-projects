// A factory function retrurns a new object

var personActions = {
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

function createPerson(firstName, lastName) {
  let person = Object.create(personActions);
  person.firstName = firstName;
  person.lastName = lastName;
  return person;
}
let person1 = createPerson("John", "Doe");
let person2 = createPerson("Jane", "Doe");

console.log(person1.getFullName());
console.log(person2.getFullName());
