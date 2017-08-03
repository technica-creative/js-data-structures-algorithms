var {Stack} = require('./../../data-structures/Stack');

// to get to the constructor because the class is
// wrapped in an enclosure, this is temporary for test
//console.log(Stack.Stack);
function divideBy2(decNumber) {
  var remStack = new Stack.Stack();
  var remaining;
  var binaryString = '';

  // loop until the division result is 0
  while(decNumber > 0) {
    remaining = Math.floor(decNumber % 2);
    remStack.push(remaining);
    // binary is a base 2 number system, so divide by 2
    decNumber = Math.floor(decNumber / 2);
  }

  while(!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

console.log(divideBy2(233));
console.log(divideBy2(10));
console.log(divideBy2(1000));
