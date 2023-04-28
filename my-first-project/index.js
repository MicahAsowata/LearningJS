const criticalCode = () => {
  throw "throw an exception";
};

const logException = (theException) => {
  console.log(theException);
};

console.log("-- Throwing in Try Catch --");
try {
  throw "Checking";
} catch (ex) {
  console.log("handling the exception");
  logException(ex);
}
