/////////// PROBLEM //////////////

// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// my way BIG O Time Complexity = O(n^2) = not good Space Complexity = O(1)
// function sumZero(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let firstNum = arr[i];
//     for (let j = 1; j < arr.length; j++) {
//       let secondNum = arr[j];
//       if (firstNum + secondNum === 0) {
//         newArr.push(firstNum, secondNum);
//       }
//     }
//   }
//   newArr.splice(2, newArr.length - 1);
//   return newArr.length ? newArr : undefined;
// }
// my way refactored lol
// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let firstNum = arr[i];
//     for (let j = 1; j < arr.length; j++) {
//       let secondNum = arr[j];
//       if (firstNum + secondNum === 0) {
//         return [firstNum, secondNum];
//       }
//     }
//   }
// }

// Their solution - I was able to solve this on my own just as he was talking it through good job VP BIG O = Time Complexity - O(n) Linear - Space Complexity O(1)
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, -1, 0, 1, 3]));
console.log(sumZero([-2, -1, 0, 2, 3, 4, 5]));
console.log(sumZero([0, 1, 2, 3, 4, 5]));

console.log(sumZero([1, 2, 3, 3, 3, 4, 5, 7]));
