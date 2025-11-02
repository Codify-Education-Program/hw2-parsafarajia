// Problem 6: Are People Objects?
// Combine names[] and ages[] into an array of { name, age }

function namesAndAges(names, ages) {
  // TODO: your code
  let result = [];
  for (let i = 0; i < names.length; i++) {
    result.push({ name: names[i], age: ages[i] });
  }
  return result;  
}

// Example usage:
console.log(namesAndAges(['Alice', 'Bob', 'Charlie'], [25, 30, 35]));
// Output: [ { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 } ]     