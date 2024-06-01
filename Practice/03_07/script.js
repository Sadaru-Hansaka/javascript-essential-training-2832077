/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const person = {
  name: "Sadaru",
  age: 19,
  gender: "male",
  education: {
    university: "Uow",
    foundation: "2021",
  },
  skills: ["HTML", "CSS", "Javascript"],
};

console.log("MY object:", person);
console.log(person.name);
