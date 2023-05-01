const book = { title: "Along came a spider", author: "James Patterson" };
const books = [
  { title: "Atomic Habits", author: "James Clear" },
  { title: "Give and Take", author: "Adam Grant" },
];

const jsonValues = JSON.stringify(book);
console.log(JSON.parse(jsonValues));
