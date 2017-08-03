// a prime number is only divisible by itself and 1.
// So, i will run a while loop and increase by 1.
function isPrime(n){
  var divisor = 2;

  while (n > divisor){
    if(n % divisor == 0){
     return false;
    }
    else
      divisor++;
  }
  return true;
}

console.log(isPrime(137));
console.log(isPrime(237));

/*
Can you make this better? yes. the divisor are increased 1 at a time. after 3 i can increase by 2. if a number is divisible by any even number, it will be divisible by 2.

Extra: if you dont have to increase the divisor up to the number. you can stop much earlier. let me explain it in the following steps (just seat back and read as many times as needed)

Explanation
step-1: Any number will not be divisible by a number bigger than half of it. for example, 13 will never be divisible by 7, 8, 9 .. it could be as big as half of it for even number. for example, 16 will be divisible by 8 but will never be by 9, 10, 11, 12...
Decision: a number will never be divisible by a number bigger than half of its values. So, we dont have to loop 50%
step-2: Now, if a number is not divisible by 3. (if it is divisible by 3, then it wouldn't be a prime number). then it would be divisible any number bigger than the 1/3 of its value. for example, 35 is not divisible by 3. hence it will be never divisible by any number bigger than 35/3 will never be divisible by 12, 13, 14 ... if you take an even number like 36 it will never be divisible by 13, 14, 15
Decision: a number could be divisible by numbers 1/3 of its value.
step-3: For example u have the number 127. 127 is not divisible by 2 hence you should check upto 63.5. Secondly, 127 is not divisible by 3. So, you will check up to 127/3 approximately 42. It is not divisible by 5, divisor should be less than 127/5 approximately 25 not by 7. So, where should we stop?
Decision: divisor would be less than Math.sqrt (n)
*/

function isPrimeTry2(n)
{
  var divisor = 3,
      limit = Math.sqrt(n);

  //check simple cases
  if (n == 2 || n == 3)
     return true;
  if (n % 2 == 0)
     return false;

  while (divisor <= limit)
  {
    if (n % divisor == 0)
      return false;
    else
      divisor += 2;
  }
  return true;
}
