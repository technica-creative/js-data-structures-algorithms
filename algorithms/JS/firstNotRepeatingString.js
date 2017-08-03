/*
 * Write a solution that only iterates over the string once and uses O(1) additional memory.

    [time limit] 4000ms (js)

    [input] string s

    A string that contains only lowercase English letters.

    Guaranteed constraints:
    1 ≤ s.length ≤ 105.

    [output] char

    The first non-repeating character in s, or '_' if there are no characters that do not repeat.

 */

 console.log(firstNotRepeatingCharacterES62("abcdefghijklmnopqrstuvwxyziflskecznslkjfabe"));

 // ===============================================================
 // Super simple ES6 solution #2 using fat arrow
 firstNotRepeatingCharacterES62 = s => {
     r = {}
     for (e of s)
         // Bitwise operator
         // ~ means NOT and creates negative value (inverts all the bits)
         // -~ creates positive value
         r[e] = -~r[e]
     for (e in r)
         if (r[e] == 1)
             return e
     return '_'
 }

// ===============================================================
// Simple ES6 solution
function firstNotRepeatingCharacterES6(s) {
    var arr = s.split("");

    for(var i = 0; i < arr.length; i++){
        var chr = arr[i];
        if( arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])){
            return arr[i]
        }
    }

    return "_"; // value of none in program
}

//Basic idea:
// - 26 is O(1), so make an array with length 26,
//    one entry for each character.
// - First time we see a value, remember the index.
// - After that, set the index to Infinity.

function firstNotRepeatingCharacterUsingMap(s) {

    var map = new Array(26).fill(0);
    for(var i in s) {
        var val = s.charCodeAt(i);
        map[val] = map[val] ? Infinity : +i+1;
    }

    //Return the character at the minimum index.
    //If there is no such character, return '_'.
    return s[Math.min(...map.filter( val => val ))-1] || "_";

}

// ===============================================================
 // This solution has an upper bound of O(n^2) and an lower bound of O(n).
 // It has a good average performance for short strings and strings with many repeated characters.
function firstNotRepeatingCharacter(s) {

  if (s.length == 0) return false;
  if (s.length == 1) return s;

  let char = s.charAt(0);
  if (s.lastIndexOf(char) == 0)
    return char;

  for(var i = 1; i < s.length-1; ++i)
  {
    char = s.charAt(i);
    if (s.lastIndexOf(char)==i && s.indexOf(char)==i)
      return char;
  }

  char = s.charAt(s.length-1);
  if (s.indexOf(char)==s.length-1)
    return char;

  return "_";
}

// ===============================================================
var g_string = new Uint32Array(100);
function firstNotRepeatingCharacter25xFaster(s)
{
  if (s.length == 0) return false;

  if (s.length > g_string.length)
    g_string = new Uint32Array(s.length);

  var length = 0;
  var char = s.charCodeAt(0);
  for(var i = 1; i < s.length; ++i)
  {
    var chari = s.charCodeAt(i);
    if(chari != char)
      g_string[length++] = chari;
  }

  if (length == s.length-1)
    return String.fromCharCode(char);

  while(length)
  {
    var char = g_string[0];
    var length_new = 0;
    for (var i = 1; i < length; ++i)
    {
      if (g_string[i] != char)
        g_string[length_new++] = g_string[i];
    }

    if (length_new == length - 1)
      return String.fromCharCode(char);
    length = length_new;
  }

  return "_";
}
