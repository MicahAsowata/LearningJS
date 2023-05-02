function promiseTimeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

async function longRunningOperation() {
  return 42;
}
async function run() {
  console.log("Start");
  await promiseTimeout(2000);

  const result = await longRunningOperation();
  console.log(result);

  console.log("stop");
}

run();
