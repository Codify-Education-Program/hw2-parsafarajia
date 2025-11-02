// Problem 5: Where's Waldo?
// Return strings containing lowercase "waldo", all in uppercase.

function uppercaseStringsContainingWaldo(arr) {
  return arr.filter(str => str.toLowerCase().includes("waldo"))
            .map(str => str.toUpperCase());
}
// Example usage:
console.log(uppercaseStringsContainingWaldo(['Waldo is here', 'Hello World', 'find waldo', 'No one here'])); 
// Output: ['WALDO IS HERE', 'FIND WALDO']
