// naive string search BIG(o) = O(n2)
function stringSrc(str, test) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < test.length; j++) {
      console.log(str[i + j], test[j]);
      if (test[j] !== str[i + j]) {
        console.log("BREAK");
        break;
      }
      if (j === test.length - 1) {
        console.log("FOUND ONE");
        count++;
      }
    }
  }
  return count;
}

console.log(stringSrc("wowomgdkfjkomg", "omg")); // 2
