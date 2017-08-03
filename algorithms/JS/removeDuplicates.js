/*
DUPLICATE REMOVAL FROM AN ARRAY
To remove duplicate members from an array, start a while loop and keep an object/ associated array. If it finds an element for the first time, it will set its value as true (element added once.). If it finds an element in the exists object, it will not insert it into the return array.
*/
function removeDuplicate(arr){
  var exists ={},
      outArr = [],
      elm;

  for(var i =0; i<arr.length; i++){
    elm = arr[i];
    if(!exists[elm]){
      outArr.push(elm);
      exists[elm] = true;
   }
  }
  return outArr;
}

console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1]));
