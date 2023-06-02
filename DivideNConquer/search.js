////////// PROBLEM ///////////

/*
Given a sorted array of integers, write a function that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1
*/

// my naive ways lol
// function search(arr, n) {
//   for (let i = 0; i < arr.length; i++) {
//     let currNum = arr[i];
//     if (currNum === n) {
//       return i;
//     }
//   }
//   return -1;
// }

// // my second naive way LMAO
// function search(arr, n) {
//   if (arr.includes(n)) {
//     return arr.indexOf(n);
//   } else {
//     return -1;
//   }
// }

// Their solution Binary Search! Big O = Log(n)

function search(arr, n) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currElem = arr[middle];

    if (currElem < n) {
      min = middle + 1;
    } else if (currElem > n) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4));
console.log(search([1, 2, 3, 4, 5, 6], 6));
console.log(search([1, 2, 3, 4, 5, 6], 11));
