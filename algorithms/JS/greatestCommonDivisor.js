// Find the greatest common divisor of two numbers
function greatestCommonDivisor(a, b){
  var divisor = 2,
      greatestDivisor = 1;

  //if u pass a negative number this will not work. fix it dude!!
  if (a < 2 || b < 2)
     return 1;

  while(a >= divisor && b >= divisor){
   if(a %divisor == 0 && b% divisor ==0){
      greatestDivisor = divisor;
    }
   divisor++;
  }
  return greatestDivisor;
}

// Make a fancier recursive algorithm
function greatestCommonDivisorFancy(a, b){
   if (b == 0) return a;
   return greatestCommonDivisorFancy(b, a % b);
}

console.log(greatestCommonDivisorFancy(14, 21));
console.log(greatestCommonDivisorFancy(69, 169));
