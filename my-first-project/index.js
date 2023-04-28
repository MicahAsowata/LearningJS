const code = function criticalCode() {
  throw "throw and exception";
};

const log = function logException(theException) {
  console.log(theException);
};

console.log("-- Throw exception --");
throw "myexception";
