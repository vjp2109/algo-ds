// My non recursive way
// function isPalindrome(str) {
//   return str === str.split("").reverse().join("");
// }

// MY way solved it with help from other helper example. I solved it tho.
// function isPalindrome(str) {
//   let newStr = "";

//   function helper(helperInput) {
//     if (helperInput.length === 0) {
//       return newStr;
//     }
//     newStr += helperInput.slice(-1);
//     newStr + helper(helperInput.slice(0, -1));
//   }
//   helper(str);
//   console;
//   return str === newStr;
// }

// ChatGPT refactored my code and it makes sense

function isPalindrome(str) {
  function reverseString(input) {
    if (input.length === 0) {
      return "";
    }
    return input.slice(-1) + reverseString(input.slice(0, -1));
  }
  const reversedStr = reverseString(str);
  return str === reversedStr;
}

console.log(isPalindrome("awesome"));
console.log(isPalindrome("foobar"));
console.log(isPalindrome("tacocat"));
console.log(isPalindrome("amanaplanacanalpanama"));
console.log(isPalindrome("amanaplanacanalpandemonium"));
