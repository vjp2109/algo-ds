////////////// PROBLEM //////////////////
/*
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
*/

// my way - but string conversion takes up a lot of time. not O(n) - REMEMBER the easy hack of converting numbers to string
function sameFrequency(num1, num2) {
  num1 += "";
  num2 += "";
  if (num1.length !== num2.length) {
    return false;
  }

  let lookup = {};
  for (let i = 0; i < num1.length; i++) {
    let num = num1[i];
    lookup[num] ? (lookup[num] += 1) : (lookup[num] = 1);
  }

  for (let i = 0; i < num2.length; i++) {
    let num = num2[i];
    if (!lookup[num]) {
      return false;
    } else {
      lookup[num] -= 1;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
