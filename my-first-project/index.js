const book = {
  title: "Along came a spider",
  author: "James Patterson",
  isAvailable: true,
  addBook: function () {
    this.isAvailable = true;
  },
  removeBook: function () {
    this.isAvailable = false;
  },
};

console.log(book);
