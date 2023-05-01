const book = {
  checkIn: function () {
    return this;
  },
};

console.log(book.checkIn() === book);
