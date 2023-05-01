function scope() {
  return this;
}

console.log(scope() === globalThis);
