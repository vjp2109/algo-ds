// Helper Method Recursion
function collectOddNums(arr) {
  let result = [];

  function helper(helperInput) {
    // base case
    if (helperInput.length === 0) {
      return;
    }
    // pushes odd numbers into result arr
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    // shrinks the array after each number
    helper(helperInput.slice(1));
  }
  // call the function with the arr that gets passed in
  helper(arr);
  // returns the results
  return result;
}

console.log(collectOddNums([1, 2, 3, 4, 5, 6, 7, 8, 9]));
