const people = ["Micah", "Aaron", "Burke", "Christopher"];
const one = 1;
const msg = "Hello 🌍";
const b = true;
const person = {
  firstName: "Micah",
  lastName: "Asowata",
};

const sayHello = (person) => {
  console.log(person.firstName);
};

console.log("-- instanceof --");
console.log(people instanceof Array);
console.log(one instanceof Number);
console.log(msg instanceof String);
console.log(b instanceof Boolean);
console.log(person instanceof Object);
console.log(sayHello instanceof Function);
