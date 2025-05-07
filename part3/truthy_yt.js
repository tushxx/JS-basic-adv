const userEmail = "tush@gmail.com";

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Dont have user email");
}
//if something is present in string then it is assumed true if it is empty it is false


//-------->>>>> falsy values <-----------
// false, 0, -0, BigInt 0n, "", null, undefined, NaN 
// except this everything is truthy value 

//---------->>>>> truthy value <------ (all except falsy values)
// [], "string", "0", 'false', " "(space inside), {}, function(){}, 

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
  console.log("object is empty");
  
}


//----->> Nullish Coalescing operator (??): Null undefined

//It provides a concise way to handle default values when dealing with potentially null or undefined variables. It returns the right-hand side operand only if the left-hand side operand is null or undefined. Otherwise, it returns the left-hand side operand.

const value1 = null ?? 'default value';
console.log(value1); // Output: "default value"

const value2 = undefined ?? 'another default value';
console.log(value2); // Output: "another default value"

const value3 = 'existing value' ?? 'default value';
console.log(value3); // Output: "existing value"

const value4 = 0 ?? 'default value';
console.log(value4); // Output: 0





//Ternary operator
condition ? true :false

let age = 20;
let isAdult = age >= 18 ? "Adult" : "Minor";
console.log(isAdult); // Output: Adult

const price = 1000
price >= 800 ? console.log("high") : console.log("low"); //output: high



