let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};
// my code
function stringifyNumbers(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] + "";
    }
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      stringifyNumbers(obj[key]);
    }
  }
  return obj;
}

// ChatGPT code ???? HMMM MY code dont work but theirs do but it says they both achieve the same final result
/*
function stringifyNumbers(obj) {
  // Create a new object to store the modified values
  const newObj = {};

  // Iterate over the keys in the object
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      // If the value is a number, convert it to a string
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      // If the value is an object (but not an array), recursively call stringifyNumbers
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      // If the value is not a number or an object, retain the original value
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
*/

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
