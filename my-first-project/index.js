/**
 * This block of code reverses a string. I don't understand how, but it works.
 */

let value = "some text";
let reversedValue = "";

value.split("").forEach((char) => (reversedValue = char + reversedValue));

console.log(reversedValue);
