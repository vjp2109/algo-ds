// Built in indexOf
// Big O = O(n)
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([3, 2, 4, 1], 1));
console.log(linearSearch([3, 2, 4, 1], 5));
