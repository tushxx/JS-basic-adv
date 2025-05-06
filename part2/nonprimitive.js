//object

// let username = {
//   firstname: "tushar",
//   isloggedin: true,
// };
// username.firstname = "tush"
// console.log(username.firstname);
// console.log(typeof username);

const username2 = {
  firstname: "tushar",
  "middle name": "shirke",
  isloggedin: true,
};

username2.firstname = "tush";
username2.lastname = "shirke";

// console.log(username2.firstname);
// console.log(username2.lastname);
// console.log(username2["middle name"])
// console.log(username2);
// console.log(typeof username2);

// here we will get same output even if we give constant (const) ,we know if we define constant values cant be changed (memory is fixed)
// here it is memory space is fixed inside it can be changed ,,inside its primitive can be changed

let today = new Date();
// console.log (today)
// o/p=2025-04-06T16:25:23.728Z
// console.log(today.getDate());
// o/p = 6

//array

let heros = ["Salman ", "B", "C", true];
console.log(heros[0]);

console.log(1 + "1"); //o/p =11
let isvalue = true;
console.log(isvalue + 1); //o/p =2 js consider js true as 1

let isvalue2 = "2abc"
console.log(Number(isvalue2)) //o/p = NaN( not a number)
console.log(typeof Number(isvalue2)) //o/p = number (NaN is number strange lol)

console.log(Number(null)) //o/p= 0
console.log(Number(undefined)) //o/p= NaN
