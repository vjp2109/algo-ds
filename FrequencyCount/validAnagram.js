/////////////// PROBLEM //////////////

/*
Frequency Counter - validAnagram
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
TIME COMPLEXITY O(n)
*/

// my solution
// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   let freqCounter1 = {};
//   let freqCounter2 = {};

//   for (let letter of str1) {
//     freqCounter1[letter] = ++freqCounter1[letter] || 1;
//   }
//   for (let letter of str2) {
//     freqCounter2[letter] = ++freqCounter2[letter] || 1;
//   }

//   for (let key in freqCounter1) {
//     if (key in freqCounter2 !== true) {
//       return false;
//     }
//     if (freqCounter1[key] !== freqCounter2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// 3 for loops which is O(3n) which is just O(n)

//Their solution - Only a tad bit faster, might not even matter O(2n) which is still O(n)

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1 - ternary operator
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // if letter does not exist as a key in the lookup obj or the value equals 0, since its falsy, and the ! operator negates the expression - it'll be true and return false, but if the letter does exist as a key, and the frequency is greater than 0, that is true, but the ! operator negates than and it goes into the else statement and decrements by 1
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("anagrams", "nagaramm"));
console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false)
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
