//////////////// Problem /////////////////

/*
Implement a function which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
*/

// my way - LOL I'm sure the naive way i Think O(n)
// function countUniqueValues(arr) {
//   const newArr = new Set(arr);
//   return [...newArr].length;
// }

// my way the pointer way, with a lil chat gpt help Big O = O(n) only looping once
function countUniqueValues(arr) {
  if (arr.length < 2) {
    return arr.length;
  }
  let count = 0;
  let first = 0;
  let second = 1;
  while (second <= arr.length) {
    if (arr[first] !== arr[second]) {
      count++;
    }
    first++;
    second++;
  }
  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
