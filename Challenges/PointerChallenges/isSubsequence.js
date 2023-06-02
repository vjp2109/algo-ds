/////////// PROBLEM /////////////////
/*
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
*/

function isSubsequence(subStr, str) {
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < subStr.length && pointer2 < str.length) {
    if (subStr[pointer1] === str[pointer2]) {
      pointer1++;
    }
    pointer2++;
  }
  return pointer1 === subStr.length;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
