// Iterative solution
// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 1; i--) {
//     total *= i;
//   }
//   return total;
// }

// Recursive solution
function factorial(num) {
  if (num === 1) return 1; // must have a base case
  return num * factorial(num - 1);
}

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
