// My way - Proud of you VP
function capitalizeFirst(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));
  return newArr.concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(["car", "taco", "banana"]));
