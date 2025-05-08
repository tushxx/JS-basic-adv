// const squareNumbers = arr.map((num) => num * num)
// You're trying to assign squareNumbers to the result of arr.map(...), but arr is not defined yet. So this code assumes arr already exists — which breaks the idea of creating a reusable function.



// Task 1: Using Array Methods -Write a function squareNumbers(arr) using map() and arrow functions
const squareNumbers = arr => arr.map(num => num * num);


// Task 2: Custom Filter Function---Create a function filterEvenNumbers(arr) using filter() and arrow functions
const filterEvenNumbers = arr => arr.filter( (num) => num % 2 === 0 )


// Task 3: Sum of Positive Numbers----Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions
const sumPositiveNumbers = (arr) => (arr.filter( (num) => num > 0 ).reduce((accumulator, current) => accumulator + current, 0))


// Task 4: Transform Array of Objects----Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions
const getNames = (arr) => (arr.map( (getname) => getname.name ));


// Task 5: Find the Longest Word----Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function
const findLongestWord = (arr) => (arr.reduce( (longest, word) => word.length > longest.length ? word: longest, "" ));


// condition ? true: false 