/**
 * Compares two objects, returning an object
 * showing the differences between the two.
 */
function compareObjects(obj1, obj2) {
  //
  const differences = {};

  //
  for (const key in obj1) {
    //
    if (obj1[key] !== obj2[key]) {
      //
      differences[key] = {
        obj1: obj1[key],
        obj2: obj2[key],
      };
    }
  }

  //
  for (const key in obj2) {
    //
    if (obj1[key] !== obj2[key]) {
      //
      differences[key] = {
        obj1: obj1[key],
        obj2: obj2[key],
      };
    }
  }

  //
  return differences;
}

const test1 = { a: 1, b: 2, c: 3 };
const test2 = { b: "two", c: 3, d: 5 };
const differences = compareObjects(test1, test2);
console.log("Differences: ", differences);
