/**
 * Returns an object that combines the key-value pairs
 * of the two input objects. If both input objects have
 * the same key, return the value from the second object.
 */
function combineObjects(obj1, obj2) {
  //
  const combinedObj = {};

  //
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  //
  for (const key of keys1) {
    //
    combinedObj[key] = obj1[key];
  }

  //
  for (const key of keys2) {
    //
    combinedObj[key] = obj2[key];
  }

  //
  return combinedObj;
}

const test1 = { a: 1, b: 2, c: 3 };
const test2 = { b: "two", c: 3, d: 5 };
const combinedObject = combineObjects(test1, test2);
console.log("Combined object: ", combinedObject);
// console.log("Native JavaScript method: ", Object.assign({}, test1, test2));
