/*  
 1.  write a loop or a 'while' loop. Precisely. That calculates the sum of all the numbers from one to five and store the result in a variable named 'sum'. */

let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i;
  i++; //i +1
}
//console.log(sum); // '15'

/*
2. write a 'while' loop that counts from countdowns from 5 to 1 and stores the number in the array named 'countdown' */

let countdown = [];
let j = 5;
while (j >= 1) {
  countdown.push(j);
  j--; //j-1
}
console.log(countdown); //[ 5, 4, 3, 2, 1 ]

/*
3. write a 'do while' loop that prompts a user to enter their favorite tea type until they enter the "stop". store each of the tea type in an array known as 'tea collection'. */

// let teacollection = [];
// let tea;

// do {
//   tea = prompt(`Enter your fav tea: (type "stop to finish")`);

//   if (tea !== "stop") {
//     teacollection.push(tea);
//   }
// } while (tea !== "stop");
//  console.log(teacollection);






/*
4. Write a 'do while' loop that adds number from 1 to 3 and stores the result in a variable named 'total'. */

let total = 0;

let t = 1;

do {
  total += t;
  t++;
} while (t <= 3);
console.log(total);



/*
5. Write a 'for' loop that multiplies each element in the array [2,4,6] by 2 and stores the result in a new array named 'multipliednumber' */

let multipliednumber = []
let numbers = [2,4,6]

// for (initphase; condition; incre/decre) {
    
    
// }
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// here is 'l' --> is index
for (let l = 0; l < numbers.length; l++) {
     multiplication = numbers[l] * 2 ;
     multipliednumber.push(multiplication)
    //  multipliednumber.push(numbers[l] * 2) -->same as above in short
    
}
console.log(multipliednumber);




/*
6.  write a 'for' loop that lists all the cities in the array. ["Paris", "New York", "Tokyo", "London"] and store each city in the new array known named 'citylist'
*/
let cities = ["Paris", "New York", "Tokyo", "London"];
let citylist = []

for (let index = 0; index < cities.length; index++) {
    const mycities = cities[index];
    citylist.push(mycities)
    
}
console.log(citylist);






const obj = {
  '1' : 'one',
  '2' : 'two'
}
for (const [key,value] of obj) {
  console.log(key);
  
}
//TypeError: obj is not iterable