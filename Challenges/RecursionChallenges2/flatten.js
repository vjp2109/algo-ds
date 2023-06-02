// Got help
function flatten(arr) {
  if (arr.length === 0) return [];
  if (Array.isArray(arr[0])) {
    return flatten(arr[0]).concat(flatten(arr.slice(1)));
  }
  //if first element is not an array, we gotta make it an array to concat with the other elements in the array, whether they be arrays or not.
  return [arr[0]].concat(flatten(arr.slice(1)));
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
