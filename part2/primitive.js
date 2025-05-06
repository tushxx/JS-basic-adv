// Numbers

let balance = 120;

let anotherbalance = new Number(120);
// o/p => [Number: 120]
console.log(anotherbalance.valueOf()); //1
// to get value we need to say value of that is normal number as a output

console.log(typeof balance); //2
// this says a what is type of that input here it is NUMBER
console.log(typeof anotherbalance); //3
// here it is OBJECT
// THATS WHY ITS SAID IN JS EVERYTHING IS AN OBJECT

//BOOLEAN

let isactive = true;
let isreallyactive = new Boolean(false); //not recommended

console.log(typeof isactive); //4
// o/p = boolean
console.log(typeof isreallyactive); //5
// o/p = object

//null and undefined

let firstname;
let lastname = null;
let first = undefined;
// console.log(firstname) //undefined
// console.log(lastname) //null
// console.log(first) //undefined

//string

let mystring = "hello";
let mystring1 = "hola";
let username = "tushar";

let oldgreet = mystring + "tushar ";
// console.log(oldgreet); 

let newgreetmessage = `hello ${username} !`; //whereever you want to add something just write it in ${}
console.log(newgreetmessage)
// `` --> keys below escape key  
let demo = `value is ${2*2}`
console.log(demo)



//symbols -->gives you uniquely value
let sym1 = Symbol(2)
let sym2 = Symbol(2)

console.log(sym1 == sym2)
// o/p will be false because symbol have given them uniqueness even if value would be same






