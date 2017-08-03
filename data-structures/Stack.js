// ES6 implementation (ugly but works for privacy of properties)
// =================================================================
// Wrap the Stack class with a 'closure' (an outer function)
// so the WeakMap has scope only inside the function.
// This prevents anyone from changing the items const.
// If this class is not wrapped in a closure, then anyone
// can change the items const because it is outside of the class Stack
// CON: if this class is extended it will not inherit the private properties
// CON: to implement in another file, you have to use new Stack.Stack()
// =================================================================
let Stack = (function () {
  // There are no private vars available in JS classes yet so
  // to ensure that the items property will be private,
  // we will use a WeakMap (can store key/value)
  // where key = object and the value = any data type
  const items = new WeakMap();

  class Stack {
    constructor() {
      items.set(this, []);
    }
    push(element) {
      let s = items.get(this);
      s.push(element);
    }
    pop() {
      let s = items.get(this);
      let r = s.pop();
      return r;
    }
    peek() { // at the last item added
      let s = items.get(this);
      return s[s.length - 1];
    }
    isEmpty() {
      let s = items.get(this);
      return s.length == 0;
    }
    size() {
      let s = items.get(this);
      return s.length;
    }
    clear() {
      let s = items.get(this);
      s = [];
    }
    print() { // helper function to print values
      let s = items.get(this);
      console.log(s.toString());
    }
  }
  return Stack;
})();

// =================================================================
// test it
// let stack = new Stack();
// stack.push(5);
// stack.push(8);
// console.log('peek', stack.peek());
//
// stack.push(11);
// console.log("==================");
// console.log('size', stack.size());
// console.log('stack empty?', stack.isEmpty());
//
// stack.push(15);
// console.log("==================");
// console.log('size', stack.size());
// console.log('peek',stack.peek());
//
// stack.pop();
// stack.pop();
// console.log("==================");
// console.log('size', stack.size());
// stack.print();

module.exports.Stack = {Stack:Stack};
