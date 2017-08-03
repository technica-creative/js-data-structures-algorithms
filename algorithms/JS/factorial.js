/*
FACTORIAL RECURSIVE function (acts like loop until num - 1 == 1);
Factorial numbers are the passed number times every number from itself down to 1
4! = 4 * 3 * 2 * 1 = 24
3! = 3 * 2 * 1 = 6
*/
function factorial(num) {
  if (num === 1) return num;
  // call function inside of itself to cause Recursion
  return num * factorial(num - 1);
}

console.log(factorial(4));


// -------------------------------------------------
// NOTES
// Recursion definition - when a function calls itself
// All recursive functions have 2 cases inside the code block
// 1. a base case that does not call the recursive function
// 2. and a recursive case where the function calls itself
// function func() {
//   if(/*base case*/) {
//     return something;
//   }
//   else { // recursive case calls itself
//     func();
//   }
// }
