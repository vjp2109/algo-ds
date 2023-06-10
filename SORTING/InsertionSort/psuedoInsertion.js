// This the way
// NOTE = The worst case scenario for insertion sort is if is in reverse order - But it's great as new data is coming in live, aka an Online algorithm
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currVal;
  }
  return arr;
}

console.log(insertionSort([50, 45, 0, 20, 10, 5]));
