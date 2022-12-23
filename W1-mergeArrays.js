// when given two sorted arrays, returns a sorted array of the numbers from both lists.

const merge = function(array1, array2) {
  newArray = [];
  for (let number of array1) {
    newArray.push(number)
  }
  for (let number of array2) {
    if (!newArray.includes(number)) {
      newArray.push(number)
    }
  }
  newArray.sort()
  return newArray;

  // newArray = array1.concat(array2)
  // return newArray.sort();
}



console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ])); // expected: [ 1, 2, 3, 4, 4, 5, 6 ]
console.log(merge([ 4 ], [ 2, 5, 8 ]));	//expected: [ 2, 4, 5, 8 ]
console.log(merge([ 1, 2, 6 ], [])); // expected: [ 1, 2, 6 ]