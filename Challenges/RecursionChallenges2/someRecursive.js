// my way with chatgpt help
function someRecursive(arr, fn) {
  if (arr.length === 0) return false;
  if (fn(arr[0])) {
    return true;
  }
  return someRecursive(arr.slice(1), fn);
}

const isOdd = (val) => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd));
console.log(someRecursive([4, 6, 8, 9], isOdd));
console.log(someRecursive([4, 6, 8], isOdd));
console.log(someRecursive([4, 6, 8], (val) => val > 10));
