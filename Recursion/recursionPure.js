// Pure Method Recursion
function collectOddNums(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddNums(arr.slice(1)));
  return newArr;
}

console.log(collectOddNums([1, 2, 3, 4, 5, 6, 7, 8, 9]));
