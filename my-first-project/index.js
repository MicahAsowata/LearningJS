const criticalCode = () => {
  throw "throw an exception";
};

const logException = (theException) => {
  console.log(theException);
};

console.log("-- Try Catch Finally --");
try {
  criticalCode();
} catch (ex) {
  console.log("handling the exception");
  logException(ex);
} finally {
  console.log("This should work");
}
