/**
 * @param {string} name
 * @returns {string} "Hello 🌍🌏🌎" or `🫡  ${name}`
 */
function printHello(name) {
  if (name === undefined || name === "") {
    return "Hello 🌍🌏🌎";
  } else {
    name = name.toString();
    return `🫡  ${name}`;
  }
}

console.log(printHello("Ruth"));
