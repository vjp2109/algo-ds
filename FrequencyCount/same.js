///////////// PROBLEM ////////////////////

/* Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same. Order doesn't matter.
 */

// Naive solution Big 0 = O(n^2) quadratic time the indexOf is sort of like a loop within the loop, because as n grows, the search will grow as well.

/*
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIdx = arr2.indexOf(arr1[i] ** 2);
    if (correctIdx === -1) {
      return false;
    }
    arr2.splice(correctIdx, 1);
  }
  return true;
}
*/

// faster way - FREQUENCY COUNTER - BIG O = O(n) - Linear time
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([2, 4, 6, 2, 6], [36, 4, 16, 4, 36])); // true
console.log(same([5, 10], [25, 100])); // true
console.log(same([2, 4, 7], [4, 16, 36])); // false
console.log(same([5, 10], [100, 25])); // true

