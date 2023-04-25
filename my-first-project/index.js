// This does not need a comment for obvious reasons
function reverseString(text) {
  let reversedValue = "";

  text.split("").forEach((char) => {
    reversedValue = char + reversedValue;
  });

  return reversedValue;
}

console.log(reverseString("Micah"));
