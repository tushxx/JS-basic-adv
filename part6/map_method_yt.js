// map() method:==
// The map() method is used with arrays to create a new array by applying a function to each element of the original array. It does not modify the original array.

const numbers = [1, 2, 3, 4, 5];

// Creating a new array with each number doubled
const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});
// doubledNumbers is [2, 4, 6, 8, 10]
// numbers is still [1, 2, 3, 4, 5]

// Using arrow function for a more concise syntax
const tripledNumbers = numbers.map(number => number * 3);
// tripledNumbers is [3, 6, 9, 12, 15]








