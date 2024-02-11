const person = {
  name: "Elid",
  job: "Web Developer",
  interests: ["Guitar", "Anime"],
  get headline() {
    return `${this.name} is a ${this.job} and likes ${this.interests[0]}`;
  },

  set primaryInterest(val) {
    console.log('Setting primary interest....');
    this.interests.unshift(val);
  },
};

console.log(person.headline);
person.primaryInterest = "Working on doing my thing";
console.log(person.headline);

