class Iterable {
  constructor(num) {
    this.num = num;
  }
  [Symbol.iterator]() {
    let num = this.num;
    let startPoint = 0;
    return {
      next() {
        let result = { value: undefined, done: true };
        if (startPoint < num) {
          result.value = String(Math.round(Math.random()))
            .concat(".")
            .concat(String(Math.floor(Math.random() * 10))
            .concat(String(Math.floor(Math.random() * 10)))
            );
          result.done = false;
          startPoint += 1;
        }
        return result;
      }
    };
  }
}

const it = new Iterable(3);
console.log([...it]);
