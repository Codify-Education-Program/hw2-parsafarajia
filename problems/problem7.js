// Problem 7: We're all getting older
// Parse a stringified object.
// If "age" exists, double it; otherwise add age = 0.

function doubleAge(objStr) {
  // TODO: your code
  let obj = JSON.parse(objStr);
  if ('age' in obj) {
    obj.age *= 2;
  } else {
    obj.age = 0;
  }
  return JSON.stringify(obj);

}
// Example usage:
console.log(doubleAge('{"name": "John", "age": 30}'));