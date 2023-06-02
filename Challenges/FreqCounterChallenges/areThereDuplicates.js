///////////  PROBLEM   /////////////////
// Frequency Counter / Multiple Pointers - areThereDuplicates

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// My way BIG O = Time and Space = O(n)
//freq counter
// function areThereDuplicates(...args) {
//   let obj = {};

//   for (let i = 0; i < args.length; i++) {
//     let currElem = args[i];
//     obj[currElem] ? (obj[currElem] += 1) : (obj[currElem] = 1);
//   }
//   console.log(obj);
//   for (let key in obj) {
//     if (obj[key] > 1) {
//       return true;
//     }
//   }
//   return false;
// }

// Multiple pointers Big O = Time O(n log n) Space O(1)
function areThereDuplicates(...args) {
  args.sort(); // Sort the elements in ascending order

  let pointer1 = 0;
  let pointer2 = 1;

  while (pointer2 < args.length) {
    if (args[pointer1] === args[pointer2]) {
      return true; // Found a duplicate
    }

    pointer1++;
    pointer2++;
  }

  return false; // No duplicates found
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true

// Fancy one liner
// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }
