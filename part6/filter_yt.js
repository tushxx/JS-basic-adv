//The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);
// console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]


// Here's an example that demonstrates the difference between using a loop and the filter method:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using a loop
const evenNumbersLoop = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbersLoop.push(numbers[i]);
  }
}
// console.log(evenNumbersLoop); // Output: [2, 4, 6, 8, 10]

// Using the filter method
const evenNumbersFilter = numbers.filter(number => number % 2 === 0);

// console.log(evenNumbersFilter); // Output: [2, 4, 6, 8, 10]




const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const userbooks = books.filter( (bk) =>  bk.publish > 2000 ) //books.genre will give empty array becuase object is inside array ,,bk is every object in this array

let userBooks = books.filter((bk) => bk.publish >= 1995 && bk.genre === "History");
console.log(userBooks); 


const userbook = books.filter((bk) => bk.publish > 2000).map( (bk) => bk.title )
console.log(userbook); //[ 'Book Five', 'Book Eight' ]

