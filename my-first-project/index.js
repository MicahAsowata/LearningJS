function promiseTimeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(reject, ms);
  });
}

promiseTimeout(2000)
  .then(() => {
    console.log("It all works");
  })
  .catch(() => {
    console.log("There is an error");
  });
