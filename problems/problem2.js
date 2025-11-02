// Problem 2: largestMystery
// Given an array and a boolean function, return the largest number
// that returns true when passed into that function.
// If none, return "No number passes the function!"

function largestMystery(arr, mysteryFunc) {
  // TODO: your code
  let largest = null;
  for (let num of arr) {
    if (mysteryFunc(num)) {
      if (largest === null || num > largest) {
        largest = num;
      }
    }
  }
  return largest !== null ? largest : "No number passes the function!";
}
// Example usage:
// Define a mystery function
function isEven(num) {
  return num % 2 === 0; 
}
console.log(largestMystery([1, 3, 5, 7], isEven)); // Output: "No number passes the function!"
console.log(largestMystery([1, 2, 3, 4, 5, 6], isEven)); // Output: 6
