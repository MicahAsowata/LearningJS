const statusCode = 500;

if (statusCode === 200) {
  console.log("OK!");
} else if (statusCode === 400 || statusCode === 500) {
  console.log("Error");
} else {
  console.log("Unknown status code");
}
