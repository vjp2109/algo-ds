// My way
function productOfArray(arr) {
  let total = arr[0];
  if (arr.length === 1) return total;
  return total * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));
