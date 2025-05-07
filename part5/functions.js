function greet(name) {
  console.log(`hello ${name}`);
  
}
//greet("tushar") //-->hello tushar

//retrun ends the function at that point only



/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/

// function makeTea(typeOfTea) {
//   console.log(`Making ${typeOfTea}`);
// }
// makeTea("Green tea")
function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("Green tea")
// console.log(teaOrder);



/* 
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.
*/

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for ${teaType}`;
  }
  return confirmOrder()
}
// console.log(orderTea("chai"));


 
/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/

// arrow 
const calculateTotal = (price, quantity) => {
  return price * quantity
}
const calculateTotals = (price, quantity) => price * quantity;
//this mean same as above we can remove curly bracket in arrow function but we need to remove return too , and everything should be in one line only

let totalCost = calculateTotal(499, 100);
// console.log(totalCost);



/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
Return the result of calling `makeTea`.
*/
function makeTea(type) {
  return `makeTea : ${type}`
}

function processTeaOrder(tea) {
  return tea("earl grey")
}
console.log(processTeaOrder(makeTea));
 



/* 
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/

function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`
  }
  
}

let teaMaker = createTeaMaker()
console.log(teaMaker("green tea"));

// createTeaMaker() ➝ returns inner function ➝ stored in teaMaker ➝ teaMaker("green tea") ➝ returns "Making green tea"



//here sam is dafault value if you do not give any value by default this value will be print
function isloggedin(username = "sam") {
    return `${username} just logged in`
}
// console.log(isloggedin()); //sam just logged in
// console.log(isloggedin("tush")); //tush just logged 

