//example 1
let count = 0;

const counter = {
  increment() {
    return ++count;
  },
  decrement() {
    return --count;
  }
};

Object.freeze(counter);
export { counter };

// example 2
class Counter {
    constructor() {
      if (instance) {
        throw new Error("You can only create one instance!");
      }
      instance = this;
    }
  
    getInstance() {
      return this;
    }
  
    getCount() {
      return counter;
    }
  
    increment() {
      return ++counter;
    }
  
    decrement() {
      return --counter;
    }
  }