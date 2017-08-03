function intersectRect(r1, r2) {
  return !(r2.left > r1.right || r2.right < r1.left || r2.top > r1.bottom || r2.bottom < r1.top);
}

var rectA = {
  left:   10,
  top:    10,
  right:  30,
  bottom: 30
};

var rectB = {
  left:   20,
  top:    20,
  right:  50,
  bottom: 50
};

var rectC = {
  left:   70,
  top:    70,
  right:  90,
  bottom: 90
};

intersectRect(rectA, rectB);  // returns true
intersectRect(rectA, rectC);  // returns false

// really good explanation hereL\:
// http://www.geeksforgeeks.org/find-two-rectangles-overlap/
