function promiseTimeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

promiseTimeout(2000)
  .then(() => {
    console.log("It all works");
    return promiseTimeout(1000);
  })
  .then(() => {
    console.log("It is working");
    return Promise.reject(42);
  })
  .then((result) => {
    console.log(result);
  })
  .catch(() => {
    console.log("There is an error");
  });
