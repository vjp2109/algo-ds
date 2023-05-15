//my way
/*
function charCount(str) {
  let obj = {};
  for (let letter of str) {
    letter = letter.toLowerCase();
    if (letter.match(/[a-z0-9]/gi)) { // regex performance is slow
      if (!obj[letter]) {
        obj[letter] = 1;
      } else {
        obj[letter]++;
      }
    }
  }
  console.log(obj);
}
*/

// fastest way - with helper function, more code, but faster
function charCount(str) {
  let obj = {};
  for (let letter of str) {
    letter = letter.toLowerCase();
    if (isAlphaNumeric(letter)) {
      if (!obj[letter]) {
        obj[letter] = 1;
      } else {
        obj[letter]++;
      }
    }
  }
  console.log(obj);
}

function isAlphaNumeric(str) {
  let code;
  for (let i = 0; i < str.length; i++) {
    code = str.charCodeAt(i);
    if (
      (code > 47 && code < 58) || // numeric (0-9)
      (code > 64 && code < 91) || // upper alpha (A-Z)
      (code > 96 && code < 123) // lower alpha (a-z)
    ) {
      return true;
    }
  }
  return false;
}

charCount("Hello");
charCount("hot sau ce");
charCount("aaaaaaa");
charCount("847564ghghgh___");
