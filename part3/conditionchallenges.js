// check if a number is greater than another number

let num1 = 5;
let num2 = 8;

console.log("I am a regular upper code");

if (num1 > num2) {
  console.log(" num1 is greater than num2");
} else {
  console.log(" num2 is greater");
}

console.log("I am a regular bottom code");

//check if a string is equal to another string

let username = "tushar.shirke";
let anotherusername = "tushar.shirke";

if (username == anotherusername) {
  console.log("username is already taken use another username ");
} else {
  console.log("you can picked this username");
}

//checking variable is number or not

let score = 44;

if (typeof score == "number") {
  console.log("yes it is number");
} else {
  console.log("it is not a number");
}

//check boolean value is true or false

let isteaready = false;

if (isteaready) {
  console.log("tea is ready");
} else {
  console.log("tea is not ready");
}


//check f an array is empty or not

let items = []; 

console.log(items.length);
//this give how many items in that array ,,,,

if (items.length == 0) {
    console.log("it is empty");
}
else{
    console.log("it is not empty");
    
}