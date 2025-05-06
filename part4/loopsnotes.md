# loopsnotes
guidelines for loops
1. keyword
2. termination condition
3.body of loops

loops type -->
1. while --> while loop actually goes ahead and check the condition first, and then execute the very     first time,   
2. do/while --> do while actually do the statements first and then check the condition at the end of it.

3.for
4.for/in
5.for/of //we can not iterate object through this but we can iterate map through this
6.forEach

********* == means equal ,,but === equal and datatype should also be equal
// let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i;
  i++; //i +1
}
here first i = 1 sum = zero 
* sum = 1
*i +1 = 2
* sum = 1+2 = 3
* i +1 = 3
* sum = 3+3 = 6
*i +1 = 4
* sum = 6+4 = 10
*i +1 = 5
* sum = 10+5 = 15


//do {
  tea = prompt(`Enter your fav tea: (type "stop to finish")`);

  if (tea !== "stop") {
    teacollection.push(tea);
  }
} while (tea !== "stop");

this says that first do until condition is matching otherwise exist 
atleast once do will be execute 
// prompt can only take input browser's console



// for (initphase; condition; incre/decre) {   
    
 }

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
its same as other just everything is written in condition bracket




learn ----->
call
bid 
apply




let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};
largecities = {}
for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largecities[city] = worldCities[city]
}
console.log(largecities);

city is a key (like "Tokyo")
worldCities[city] is its value (like 9000000)
largecities[city] = worldCities[city] says:
In the largecities object, create a key with the name city and assign it the value from worldCities




# object is not iterable through forof
const obj = {
  '1' : 'one',
  '2' : 'two'
}
for (const [key,value] of obj) {
  console.log(key);
  
}
//TypeError: obj is not iterable