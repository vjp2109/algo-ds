// My way again - SO EFFIN PROUD V
let words = ["i", "am", "learning", "recursion"];

function capitalizeWords(arr) {
  let newArr = [];
  if (arr.length === 0) return newArr;
  newArr.push(arr[0].toUpperCase());
  return newArr.concat(capitalizeWords(arr.slice(1)));
}

console.log(capitalizeWords(words));
