// My way
function recursiveRange(num) {
  let total = 0;
  if (num === 0) {
    return total;
  }
  return num + recursiveRange(num - 1);
}
console.log(recursiveRange(6));
console.log(recursiveRange(10));
