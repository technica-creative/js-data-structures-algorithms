// Solve this task in-place (with O(1) additional memory)

// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

/*
    Example

    For =====================
    a = [[1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]]

    the output should be =================
    rotateImage(a) =
       [[7, 4, 1],
        [8, 5, 2],
        [9, 6, 3]]

    Input/Output

       [time limit] 4000ms (js)

       [input] array.array.integer a

       Guaranteed constraints:
       1 ≤ a.length ≤ 100,
       a[i].length = a.length,
       1 ≤ a[i][j] ≤ 104.

       [output] array.array.integer
*/

// ======================================================
//http://jsfiddle.net/FloydPink/0fg4rLf9/
var rotateClockwise = function(matrix) {
  // reverse the rows
  matrix = matrix.reverse();
  // swap the symmetric elements
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < i; j++) {
      var temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  return matrix;
};

var rotateCounterClockwise = function(matrix) {
  // reverse the individual rows
  matrix = matrix.map(function(row) {
    return row.reverse();
  });
  // swap the symmetric elements
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < i; j++) {
      var temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
};
// =======================================================
// ES6 solution, hard to read though
r = []
rotateImage = a =>
a.map((e, i) =>
    a.map((f, j) =>
        r[i][j] = a[n - j - 1][i]
    , r[i] = [])
, n = a.length) && r

// using XOR swap
function rotateImage(a) {
    // Transpose
    for(var i = 0;i<a.length;i++){
        for(var j = 0;j<i;j++){
            // Switch a[i][j] and a[j][i]
            // With XOR swap
            a[i][j] ^= a[j][i]
            a[j][i] ^= a[i][j]
            a[i][j] ^= a[j][i]
         }
    }

    // Reverse columns
    for(var i in a){
        a[i] = a[i].reverse()
    }

    return a;
}


let a = [[1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]];

console.log(rotateClockwise(a));
