//  The accumulator is the result of the previous iteration, and currentValue is the current element.

const array = [{ a: 1, b: 2 }, { a: 3, b: 4 }, { a: 5, b: 6 }];

// Summing a property
const sum = array.reduce((accumulator, current) => accumulator + current.a, 0); //0--->initiak value treated as accumulator at first
// console.log(sum); // Output: 9

// if we print accumulator and current.a we will get respectively
// (1)--> 0 (given), 1
// (2)--> 1, 3
// (3)--> 4, 5
// sum ---> 4+5 = 9


const shoppingcart = [
    {
        itemname : "js",
        price : 999
    },
    {
        itemname : "py",
        price : 599
    },
    {
        itemname : "java",
        price : 399
    },
    {
        itemname : "cpp",
        price : "1999"
    },
]

const total = shoppingcart.reduce( (accumulator, item) => accumulator + Number(item.price), 0)
console.log(total);//3996





// Grouping by a property
const grouped = array.reduce((accumulator, current) => {
  if (!accumulator[current.b]) {
    accumulator[current.b] = [];
  }
  accumulator[current.b].push(current.a);
  return accumulator;
}, {});
console.log(grouped); // Output: { '2': [ 1 ], '4': [ 3 ], '6': [ 5 ] }

// Transforming into a new object
const transformed = array.reduce((accumulator, current) => {
  accumulator[current.a] = current.b;
  return accumulator;
}, {});
console.log(transformed); // Output: { '1': 2, '3': 4, '5': 6 }