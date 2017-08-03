/*
Find all prime factors of a number:
Run a while loop. start dividing by two and if not divisible increase divider until u r done.
*/
function primeFactors(n){
  var factors = [],
      divisor = 2;

  while(n > 2){
    if(n % divisor == 0){
       factors.push(divisor);
       n= n/ divisor;
    }
    else{
      divisor++;
    }
  }
  return factors;
}

console.log(primeFactors(69));

/*
TIME COMPLEXITY is O(n).

To make it better you can increase the divisor by 2
to divisor = 3.

If a number is divisible by any even number it would divisible by 2. Hence, you dont need to divide by even numbers. Besides, you will not have a factor bigger than half of its value. if you want make it complex use tough concept in no. 1 (try-2. if u get it)
*/
