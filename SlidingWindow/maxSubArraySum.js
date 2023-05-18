////////////// PROBLEM ///////////////////
/*
Write a function which accepts an array of integers and a number called n. The function should calculate the maximum sum on n consecutive elements in the array
*/

//naive approac
// function maxSubarrySum(arr, n) {
//   if (n > arr.length) {
//     return null;
//   }
//   let max = -Infinity;
//   for (let i = 0; i < arr.length - n + 1; i++) {
//     let temp = 0;
//     for (let j = 0; j < n; j++) {
//       temp += arr[i + j];
//       console.log(i, j);
//     }
//     if (temp > max) {
//       max = temp;
//     }
//     console.log(temp, max);
//   }
//   return max;
// }

//sliding window approach - Big O = 0(n)
function maxSubarrySum(arr, n) {
  if (n > arr.length) {
    return null;
  }

  let maxSum = 0;
  let currSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  currSum = maxSum;

  // slide the window through the array to find the maximum sum
  for (let i = n; i < arr.length; i++) {
    //this logic right here is the magic
    currSum = currSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}
console.log(maxSubarrySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
