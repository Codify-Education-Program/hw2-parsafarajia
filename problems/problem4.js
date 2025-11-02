// Problem 4: indexAndConcat
// Prefix each string with its index ("0Hello!")

function indexAndConcat(arr) {
  return arr.map((str, index) => index + str);
}

// Example usage:
console.log(indexAndConcat(['Hello', 'World', 'Test'])); 
// Output: ['0Hello', '1World', '2Test']
