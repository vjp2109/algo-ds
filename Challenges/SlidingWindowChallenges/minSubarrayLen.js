////// PROBLEM //////////

/*
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
*/

//THIS IS THE HARDEST CONCEPT FOR ME TO GRASP SO FAR

function minSubArrayLen(arr, n) {
  let start = 0;
  let end = 0;
  let sum = 0;
  let minLength = Infinity;

  while (start < arr.length) {
    if (sum >= n) {
      minLength = Math.min(minLength, end - start);
      sum -= arr[start];
      start++;
    } else if (end < arr.length) {
      sum += arr[end];
      end++;
    } else {
      break;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray)
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
