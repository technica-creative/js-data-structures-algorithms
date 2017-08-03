/*
How do you get nth Fibonacci number?
RUNTIME COMPLEXITY is O(n)
*/

function fibonacci(n){
  var fibo = [0, 1];

  if (n <= 2) return 1;

  for (var i = 2; i <=n; i++ ){
   fibo[i] = fibo[i-1]+fibo[i-2];
  }

 return fibo[n];
}

console.log(fibonacci(12));

/*
To make it recursive do the following:
RUNTIME COMPLEXITY with recursive is O(2n)
ref: http://stackoverflow.com/a/360773/1535443
*/
function fibonacciRecursive(n){
  if (n <= 1) return n;

  return fibonacciRecursive(n-1) + fibonacciRecursive (n-2);
}

console.log(fibonacciRecursive(12));
