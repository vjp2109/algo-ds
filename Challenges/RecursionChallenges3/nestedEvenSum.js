// My way - Proud of you again VP
// Might not be THEE way, but lets see.
function nestedEvenSum(obj) {
  let sum = 0;
  for (let key in obj) {
    if (obj[key] % 2 === 0) {
      sum += obj[key];
    }
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    }
  }
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1));
console.log(nestedEvenSum(obj2));
